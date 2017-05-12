
var language = {"japanese" : "index.html#lang:ja", "hiragana" : "index.html#lang:ja_HIRA", "english" : "index.html#lang:en"}

function chooseLang(lang){
    if(lang in language){
	setTimeout(function(){
	    location.href=language[lang]}, 500);
    }
    else{
	console.log("Language not implemented.");
    }
}
