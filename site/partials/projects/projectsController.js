angular
.module('myApp')
.controller('ProjectsCtrl', ['myProjects', ProjectsCtrl])

function ProjectsCtrl(myProjects){
	var vm = this;
	vm.projectsArray = myProjects().projectsArray;
}