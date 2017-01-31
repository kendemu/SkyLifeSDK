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
	bebop: { adaptor: 'bebop' }
    },

    devices: {
	drone: { driver : 'bebop' }
    },

    work: function(my){
	
    }
}).start();
