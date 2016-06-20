angular
.module('myApp')
.config(['$stateProvider', '$urlRouterProvider', config])

function config($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise("home")
	var myRoot = {
		name: "root",
		url: "/",
		views: {
			"header": {
				templateUrl: "./partials/header/header.html"
			},
			"content": {
				templateUrl: "./partials/home/home.html"
			},
			"footer": {
				templateUrl: "./partials/footer/footer.html"	
			},
			"menu@root": {
				templateUrl: "./partials/header/header-partials/menu.html",
				controller: "MenuCtrl",
				controllerAs: "menu"
			}
		}
	},
	//Isolated home state to avoid confusion when distinguishing active states.
	home = {
		name: "home",
		url: "home",
		parent: "root",
		views: {
			"content@": {
				templateUrl: "./partials/home/home.html",
			}
		}
	}
	about = {
		name: "about",
		url: "about",
		parent: "root",
		views: {
			"content@": {
				templateUrl: "./partials/about/about.html",
				controller: "AboutCtrl",
				controllerAs: "about"
			}
		}
	},
	projects = {
		name: "projects",
		url: "projects",
		parent: "root",
		views: {
			"content@": {
				templateUrl: "./partials/projects/projects.html",
				controller: "ProjectsCtrl",
				controllerAs: "projects"
			}
		}
	};

	$stateProvider
	.state(myRoot)
	.state(home)
	.state(about)
	.state(projects);
}