angular
.module('myApp')
.controller('ProjectsCtrl', ['myProjects', ProjectsCtrl])

function ProjectsCtrl(myProjects){
	var vm = this;
	vm.projectsArray = myProjects().projectsArray;
	vm.projectsEven = myProjects().projectsEven;
	vm.projectsOdd = myProjects().projectsOdd;
	// $(function(){
	// $('.projects-content').on('mouseenter', 'img', function(){
	// 	console.log("I hover");
	// 	$(this).animate({'max-width': '22em'}, 300);
	// });

	// $('.projects-content').on('mouseleave', 'img', function(){
	// 	console.log("I leave");
	// 	$(this).animate({'max-width': '20em'}, 300);
	// });
// })


}