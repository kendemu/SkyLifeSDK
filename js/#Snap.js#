import React from "react";

export class Snap extends React.Component{
    componentDidMount(){
	let world = new WorldMorph(document.getElementById('world'), false);
	new IDE_Morph().openIn(world);

	let loop = () => {
	    requestAnimationFrame(loop);
	    world.doOneCycle();
	}
	
	loop();	
    }
    
    render(){
	return (
	    <canvas id="world" tabindex="1"></canvas>
	);
    }
}
