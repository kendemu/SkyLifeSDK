import Cylon from "cylon";
import SocketIO from "socket.io";
import net from "net";

Cylon.api("http", {
    host: '127.0.0.1',
    port: '3001',
    ssl: false,
    auth: false
});

Cylon.robot({
    name: "Scratch4D",
    connections: {
	ardrone: { adaptor: 'ardrone', port: '192.168.1.1' }
    },

    devices: {
	drone: { driver : 'ardrone' }
    },

    work: function(my){
	const server = net.createServer();
	const io     = SocketIO(server);
	server.listen(3003);

	io.on("connection", function(socket){
	    my.drone.on("takeoff",function(event){
		console.log("takeoff");
		socket.emit("takeoff");
	    });
	    my.drone.on("landing",function(event){
		console.log("landing");
		socket.emit("landing");
	    });
	    my.drone.on("landed",function(event){
		console.log("landed");
		socket.emit("landed");
	    });
	    my.drone.on("hovering",function(event){
		console.log("hovering");
		socket.emit("hovering");
	    });
	    my.drone.on("flying",function(event){
		console.log("flying");
		socket.emit("flying");
	    });
	});
    }
}).start();
