angular
.module('myApp')
.controller('MenuCtrl', ['myAutoscrollToggle', MenuCtrl])

function MenuCtrl(myAutoscrollToggle){
	console.log("running");
	$(".dropbtn").on("click", function(){
		// if($("#menu-dropdown-content").css("display", "block")) {
		// 	$("#menu-dropdown-content").slideUp(200);
		// }
		$("#menu-dropdown-content").slideToggle(200);
	});

	$("#menu-dropdown-content a").on("click", function(){
		$("#menu-dropdown-content").css("display", "none");
	});


	$(document).on("click", function(e){
		console.log("window clicked");
		var button = $(".dropbtn");
		if (!button.is(e.target) && button.has(e.target).length === 0) {
			$("#menu-dropdown-content").slideUp(200);
		} else {
			// $("#menu-dropdown-content").slideDown(200);
		}
	});
	
}