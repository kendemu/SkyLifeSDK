
require('path');

var electron = require('electron');
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;
var mainWindow = null;
var videoWindow = null;

var drone = require("node-bebop").createClient();
drone.config('general:navdata_demo', 'TRUE');

var lastPng = null;

var dataToTrack_keys = ["batteryPercentage", "clockwiseDegrees", "altitudeMeters", "frontBackDegrees", "leftRightDegrees", "xVelocity", "yVelocity", "zVelocity"];
var lastDroneDataReceived = null;



var PORT = 3001;
var VPORT = 3002;
var server = null;


app.on('window-all-closed', function() {
    drone.land();
    if (process.platform != 'darwin')
	app.quit();
});

app.on('ready', function(){
    require('ar-drone-png-stream')(drone, { port: VPORT });
    
    mainWindow = new BrowserWindow({width:1920, height:1080});
    mainWindow.loadURL('file://' + __dirname + '/index.html');


    drone.connect(function(){
    });
    
    mainWindow.on('closed', function() {
	drone.land();
	mainWindow = null;
    });

    drone.on('ready', function(){
	server = require("http").createServer(handleRequest);    
    });
    
    drone.on('navdata', function(data){
	lastDroneDataReceived = data;
    });
    
    server.listen(PORT, function() {
	return console.log("HTTP server running on port " + PORT);
    });
    
});

    

function handleVideoRequest(request, response){
    if(!lastPng){
	response.writeHead(503);
	response.end('Did not receive any png data yet');
	return;
    }

    response.writeHead(200, {'Content-Type' : 'image/png'});
    response.end(lastPng);
}

function handleRequest(request, response){
    
    var url_params = request.url.split('/');
    
    if (url_params.length < 2)
        return;

    var command = url_params[1];
    var speed;
    var duration;

    if (!drone) return;

    switch (command){

    case 'takeoff':
    case 'land':
    case 'stop':
    case 'disableEmergency':
        
        console.log("DRONE command: " + command);
        response.end('DRONE command: ' + command);
	
        if (typeof drone[command] === "function") 
            drone[command]();
        break;
	
    case 'up': case 'down': case 'front': case 'back': case 'clockwise': case 'counterClockwise': case 'left': case 'right':	
        //extract 'speed' from the url params
        speed = (url_params.length >= 3) ? url_params[2] : 0;
	
        //convert from 0-100 to 0-1
        speed /= 100;
	
        console.log("DRONE command " + command + " with speed " + speed);
        response.end("DRONE command " + command + " with speed " + speed);
	
    case 'up' :
	drone.up(speed);
	break;
    case 'down':
	drone.down(speed);
	break;
    case 'front':
	drone.forward(speed);
	break;
    case 'back':
	drone.backward(speed);
	break;
    case 'left':
	drone.left(speed);
	break;
    case 'right':
	drone.right(speed);
        break;
    case 'clockwise':
	drone.clockwise(speed);
	break;
    case 'counterClockwise':
	drone.counterClockwise(speed);
	break;
	
    case 'flipAhead': case 'flipLeft': case 'yawShake': case 'wave':
        //extract 'duration' from the url params
        duration = (url_params.length >= 3) ? url_params[2] : 0;
	
        console.log("DRONE command " + command + " with duration " + duration);
        response.end("DRONE command " + command + " with duration " + duration);
        drone.animate(command, duration * 1000);
        break;
	
    case 'poll':
        respondToPoll(response);
        break;
	
    case 'reset_all':
        console.log('reset_all command received from Scratch. execute a \'stop\' on the drone and then a \'land\'.')
        response.end('reset_all received');
	
        drone.stop();
        drone.land();
        
        break;
	
    default:
        console.log('Unknown Command: ' + request.url);
        response.end('Unknown Command: ' + request.url);
        break;
    }
}

function respondToPoll(response){
    
    var noDataReceived = (!drone || !lastDroneDataReceived) ? true : false;
    //console.log("drone: " + drone);
    //console.log("lastDroneDataReceived: " + lastDroneDataReceived);
    var resp = "";
    var i;
    for (i = 0; i < dataToTrack_keys.length; i++){
        resp += dataToTrack_keys[i] + " ";
        resp += (!lastDroneDataReceived || !lastDroneDataReceived.demo) ? "-1" : Math.round(lastDroneDataReceived.demo[dataToTrack_keys[i]], 4);
        resp += "\n";
    }
    
    response.end(resp);
    //console.log("\n"+resp+"\n");
}
