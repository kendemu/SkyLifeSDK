import electron from 'electron';
import DroneHttpServer from "./DroneHttpServer.min";

const app = electron.app;
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
		path: '/land'
	    }
	    ,(response) => {console.log(response)});
	app.quit();
    }
});

app.on('ready', () => {
    const DroneServer = new DroneHttpServer("ARDrone");
    //new DroneServer("BebopDrone");
    DroneServer.start();
    mainWindow = new BrowserWindow({width:1920, height:1080});
    mainWindow.loadURL('file://' + __dirname + '/../index.html');	
    mainWindow.on('closed', () => {
	http.request(
	    {
		host: 'localhost',
		port: '3001',
		path: '/land'
	    }
	    ,(response) => {console.log(response)});
	
	mainWindow = null;
    });    
});
