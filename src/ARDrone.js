import Cylon from "cylon";

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
	
    }
}).start();
