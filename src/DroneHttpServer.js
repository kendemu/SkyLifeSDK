import http from "http";
import Bebop from "node-bebop";

const drone = Bebop.createClient();

class DroneHttpServer{
    constructor(port){
	this.port = port;
	console.log("DroneHttpServer object created");
    }
    
    start(){
	let server = http.createServer(this.handleRequest);

	drone.on('navdata', (data) => {
	    lastDroneDataReceived = data;
	});
	
	server.listen(this.port, () => {
	    return console.log("HTTP server running on port " + this.port);
	});
	
    }

    handleRequest(request, response){
	let url_params = request.url.split('/');
	
	if (url_params.length < 2)
	    return;

	const command = url_params[1];
	let speed;
	let duration;

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

		if (typeof drone[command] === "function")
		    drone[command](speed);

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

    handleVideoRequest(request, response){
	if(!lastPng){
	    response.writeHead(503);
	    response.end('Did not receive any png data yet');
	    return;
	}
	
	response.writeHead(200, {'Content-Type' : 'image/png'});
	response.end(lastPng);
    }	
}

export default DroneHttpServer;
