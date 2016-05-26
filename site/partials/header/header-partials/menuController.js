angular
.module('myApp')
.controller('MenuCtrl', ['myAutoscrollToggle', MenuCtrl])

function MenuCtrl(myAutoscrollToggle){
	console.log("running");
	// myAutoscrollToggle(".nav-button", "#mast-content");
	// $(".nav-button").on("click", function(){
	// 	$("#mast-content").attr("autoscroll", "true");
	// });
	
}