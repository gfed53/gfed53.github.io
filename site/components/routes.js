angular
.module("myApp")
.config(["$stateProvider", "$urlRouterProvider", config])

.run(["$rootScope", "$uiViewScroll", function($rootScope, $uiViewScroll) {
		// console.log("huh");
	 //    $rootScope.$on("$routeChangeStart", function() {
	 //        // $rootScope.isLoading = true;
	 //    });
	 //    $rootScope.$on("$routeChangeSuccess", function() {
	 //    		console.log("change success");
	 //    		$uiViewScroll("#mast-content");
	 //    });
	}]);

function config($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise("/")
	var myRoot = {
		name: "root",
		url: "/",
		views: {
			"header": {
				templateUrl: "./partials/header/header.html"
				// controller: "HeaderCtrl",
				// controllerAs: "header"
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
	.state(about)
	.state(projects);
}