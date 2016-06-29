angular
.module('myApp')
.controller('MenuCtrl', [MenuCtrl])

function MenuCtrl(myAutoscrollToggle){
	$(".dropbtn").on("click", function(){
		$("#menu-dropdown-content").slideToggle(200);
	});

	$("#menu-dropdown-content a").on("click", function(){
		$("#menu-dropdown-content").css("display", "none");
	});


	$(document).on("click", function(e){
		var button = $(".dropbtn");
		if (!button.is(e.target) && button.has(e.target).length === 0) {
			$("#menu-dropdown-content").slideUp(200);
		}
	});
	
}