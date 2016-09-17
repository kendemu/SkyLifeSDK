var xmlHttpRequest = new XMLHttpRequest();
xmlHttpRequest.onreadystatechange = function()
{
    var READYSTATE_COMPLETED = 4;
    var HTTP_STATUS_OK = 200;

    if( this.readyState == READYSTATE_COMPLETED
	&& this.status == HTTP_STATUS_OK )
    {
	//alert( this.responseText );
    }
}

function clickButton(buttonNo){
    xmlHttpRequest.open( 'GET', "http://localhost:3001");
    if(buttonNo === 0){
	xmlHttpRequest.open( 'GET', "http://localhost:3001/takeoff", true);
	xmlHttpRequest.send();
	//request.send("/takeoff");
	//takeoff
    }
    else if(buttonNo === 1){
	//land
	xmlHttpRequest.open( 'GET', "http://localhost:3001/land", true);
	xmlHttpRequest.send();
	//request.send("/land");
	//$.post(URL + ":3001" + "/land");
    }
    else if(buttonNo === 2){
	//stop
	xmlHttpRequest.open( 'GET', "http://localhost:3001/stop", true);
	xmlHttpRequest.send();
	//request.send("/stop");
	//$.post(URL + ":3001" + "/stop");
    }
}

function EncodeHTMLForm( data )
{
    var params = [];

    for( var name in data )
    {
	var value = data[ name ];
	var param = encodeURIComponent( name ) + '=' + encodeURIComponent( value );

	params.push( param );
    }

    return params.join( '&' ).replace( /%20/g, '+' );
}
