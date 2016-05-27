angular
.module('myApp', ['ui.router'])

.config([config])
.run(["$timeout", function($timeout){
	console.log("running");
	// $timeout(function(){
	// 	$("#move-to").attr("autoscroll", "true");
	// }, 5000);
}])

function config(){
	// $(".nav-button").on("click", function(){
	// 	console.log("nav clicked");
	// 	$("#mast-content").scrollIntoView();
	// });
}