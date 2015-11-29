$(function(){
	console.log("Hi");
	$('.projects-content').on('mouseenter', 'img', function(){
		console.log("I hover");
		$(this).animate({'max-width': '22em'});
	});

	$('.projects-content').on('mouseleave', 'img', function(){
		console.log("I leave");
		$(this).animate({'max-width': '20em'});
	});

});