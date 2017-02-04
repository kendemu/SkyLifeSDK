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

app.on('ready', () => {
    mainWindow = new BrowserWindow({width:1920, height:1080, icon: __dirname + '/../drone.ico'});
    mainWindow.loadURL('file://' + __dirname + '/../view/setup.html');
    mainWindow.on('closed', () => {
	console.log("window closed")+
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
});

ipc.on('drone', (event, arg) => {
    console.log("ipc called");
    const DroneServer = new DroneHttpServer(arg);
    DroneServer.start();
});

