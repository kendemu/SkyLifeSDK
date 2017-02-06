import http from "http";
import Bebop from "node-bebop";

class DroneHttpServer{
    constructor(drone){
	this.drone = drone;
	console.log("DroneHttpServer object created");
    }
    
    start(){
	require("./SkyLifeSimulator");
	//require( __dirname +"/" + this.drone);
    }
}
export default DroneHttpServer;
