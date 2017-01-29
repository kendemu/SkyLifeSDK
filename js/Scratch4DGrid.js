import ReactGridLayout from "react-grid-layout";
import React from "react";
import Snap from "./Snap";

export class Scratch4DGrid extends React.Component{
    render(){
	let layout = [
	    {i: 'editor', x: 0, y:0, w: 6, y: 8},
	    {i: 'preview', x:7, y:0, w:6, y: 4}
	];
	return (
	    <ResponsiveReactGridLayout layouts={layouts}
	    breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
	    cols={{lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}}>
	    <Snap />
	    <iframe key={"2"} src="http://localhost:3002"></iframe>
	    </ResponsiveReactGridLayout>
	);
    }
}
