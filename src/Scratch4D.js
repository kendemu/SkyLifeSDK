import electron from 'electron';
import DroneHttpServer from "./DroneHttpServer";
import http from "http";


const app = electron.app;
const ipc = electron.ipcMain;
const BrowserWindow = electron.BrowserWindow;

let mainWindow = null;
let videoWindow = null;

const PORT = 3001;
const VPORT = 3002;
let server = null;

let force_quit = false;

app.on('window-all-closed', () => {
    if (process.platform != 'darwin'){
	http.request(
	    {
		host: 'localhost',
		port: '3001',
		path: '/api/robots/Scratch4D/devices/drone/commands/land'
	    }
	    ,(response) => {console.log(response)});
	app.quit();
    }
});

app.on('will-quit', function(){
    console.log("will quit");
    mainWindow = null;
});

app.on('ready', () => {
    mainWindow = new BrowserWindow({width:1920, height:1080, icon: __dirname + '/../drone.ico'});
    mainWindow.loadURL('file://' + __dirname + '/../view/setup.html');
    mainWindow.on('closed', () => {
	console.log("window closed");
	http.request(
	    {
		host: 'localhost',
		port: '3001',
		path: '/api/robots/Scratch4D/devices/drone/commands/land'
	    }
	    ,(response) => {console.log(response)});
	
	mainWindow = null;
	app.quit();
    });

    mainWindow.on('close', (e) => {
	console.log("close");
	if(!force_quit){
	    e.preventDefault();
	    mainWindow.hide();
	}
    });
    
    app.on('before-quit', () =>{
	console.log("app wants to quit");
	force_quit = true;
    });

    app.on('activate-with-no-open-windows',() => {
	mainWindow.show();
    });
    
});

ipc.on('drone', (event, arg) => {
    console.log("ipc called");
    const DroneServer = new DroneHttpServer(arg);
    DroneServer.start();
});
