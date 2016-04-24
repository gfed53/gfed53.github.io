angular
.module('myApp')
.config(['$stateProvider', '$urlRouterProvider', config])


function config($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise("/")
	var myRoot = {
		name: "root",
		url: "/",
		views: {
			'header': {
				templateUrl: "./partials/header/header.html"
				// controller: 'HeaderCtrl',
				// controllerAs: 'header'
			},
			'content': {
				templateUrl: "./partials/content/content.html",
				controller: 'ContentCtrl',
				controllerAs: 'content'
			},
			'footer': {
				templateUrl: "./partials/footer/footer.html"	
			},
			'menu@root': {
				templateUrl: "./partials/header/header-partials/menu.html"
			}
		}
	},
	about = {
		name: "about",
		url: "about",
		parent: "root",
		views: {
			'content@': {
				templateUrl: "./partials/about/about.html"
			}
		}
	},
	projects = {
		name: "projects",
		url: "projects",
		parent: "root",
		views: {
			'content@': {
				templateUrl: "./partials/projects/projects.html",
				controller: "ProjectsCtrl",
				controllerAs: "projects"
			}
		}
	};


	$stateProvider
	.state(myRoot)
	.state(about)
	.state(projects);
}