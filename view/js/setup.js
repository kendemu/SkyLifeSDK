var ipc = require("electron").ipcRenderer;

function chooseDrone(drone){
    ipc.send("drone", drone);
    console.log("choose drone called");
    setTimeout(function(){
	location.href="index.html"}, 500);
}
