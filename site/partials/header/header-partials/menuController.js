angular
.module('myApp')
.controller('MenuCtrl', ['myAutoscrollToggle', MenuCtrl])

function MenuCtrl(myAutoscrollToggle){
	console.log("running");
	// $(".dropbtn").on("click", function(){
	// 	$("#menu-dropdown-content").toggle();
	// });
	$(document).on("click", function(e){
		console.log("window clicked");
		var button = $(".dropbtn");
		if (!button.is(e.target) && button.has(e.target).length === 0) {
			$("#menu-dropdown-content").css("display", "none");
		} else {
			$("#menu-dropdown-content").css("display", "block");
		}
	});
	
}