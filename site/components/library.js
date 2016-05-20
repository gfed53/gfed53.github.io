angular
.module('myApp')
.factory('myProjects', [myProjects])
.factory('myQuoteLib', [myQuoteLib])

function myProjects(){
	return function(){
		var projectsArray = [
			{
				title: "Using API's with Media Swirl",
				link: "//gfed53.github.io/API-Hack/index.html",
				ghlink: "//github.com/gfed53/API-Hack",
				image: "./images-min/mediaswirl.png",
				blurb: "Using the TASTEKiD API, this app showcases the power of APIs and JSON objects."
			},
			{
				title: "Game Development with Flying Hadouken",
				link: "//gfed53.github.io/flappy-bird/site/index.html",
				ghlink: "//github.com/gfed53/flappy-bird",
				image: "./images-min/fbird.png",
				blurb: "A app with a landing page that brings together HTML Canvas, an Entity Component System, and a bit of physics in creating a Flappy Bird clone. Also demonstrates SASS for CSS preprocessing, and Gulp as a build-tool."
			},		

			{
				title: "Flickr Searcher",
				link: "//gfed53.github.io/flickr-search/",
				ghlink: "//github.com/gfed53/flickr-search",
				image: "./images-min/flickr.png",
				blurb: "Using Angular to create an API-driven app that utilizes built-in services to handle RESTful requests and promises."
			},

			{
				title: "Ultimate YouTube Searcher",
				link: "//gfed53.github.io/ultimate-youtube-searcher/src/#/about",
				ghlink: "//github.com/gfed53/ultimate-youtube-searcher",
				image: "./images-min/ult-youtube.png",
				blurb: "Using YouTube's Data API, this app showcases CORS requests and also implements ui.router for Angular.js, which deals with states and nested views to make a more modularized app."
			}

		],

		otherProjectsArray = [
		{
			title: "Hacking The Times",
			link: "./images/times10_13_15.png",
			ghlink: "./images/times10_13_15.png",
			image: "./images-min/times10_13_15.png",
			blurb: "An early task demonstrating the benefits of Chrome Developer Tools."
		},
		{
			title: "Karma Landing Page (using basic CSS3)",
			link: "//gfed53.github.io/startup-new/index.html",
			ghlink: "//github.com/gfed53/startup-new",
			image: "./images-min/karma-withoutboot.png",
			blurb: "Building a landing page from scratch. This demonstrates usage of basic HTML and CSS."
		},
		{
			title: "Karma Landing Page (using Bootstrap)",
			link: "//gfed53.github.io/karma-withboot/index.html",
			ghlink: "//github.com/gfed53/karma-withboot",
			image: "./images-min/karma-withboot.png",
			blurb: "Similiar to the original Karma page, this project demonstrates the basic benefits of using Bootstrap to simplify format as well as responsive design."
		},
		{
			title: "jQuery Street Fighter",
			link: "//gfed53.github.io/jquery-streetfighter/main.html",
			ghlink: "//github.com/gfed53/jquery-streetfighter",
			image: "./images-min/sf.png",
			blurb: "A display of using fundamental jQuery knowledge to bring an iconic video game character to life."
		},
		{
			title: "Shopping List App",
			link: "//gfed53.github.io/shopping-list-app/index.html",
			ghlink: "//github.com/gfed53/shopping-list-app",
			image: "./images-min/quicklist.png",
			blurb: "Using fundamental Javascript and jQuery to create a simple app for grocery shopping."
		},
		{
			title: "Hot-or-Cold Starter",
			link: "//gfed53.github.io/hot-or-cold-starter/index.html",
			ghlink: "//github.com/gfed53/hot-or-cold-starter",
			image: "./images-min/hot-or-cold.png",
			blurb: "Using Javascript control flow to create a guessing-game-app."
		},	
		{
			title: "Quiz on Modern Culture",
			link: "//gfed53.github.io/quiz-app/index.html",
			ghlink: "//github.com/gfed53/quiz-app",
			image: "./images-min/quizapp.png",
			blurb: "An example of using basic object-oriented programming in a project."
		},
		{
			title: "ngMadLibs",
			link: "//gfed53.github.io/ng-madlibs/",
			ghlink: "//github.com/gfed53/ng-madlibs",
			image: "./images-min/ng-madlibs.png",
			blurb: "An app that showcases basic usage of Angular.js's built-in directives as well as ngMessages for validation, and ngAnimate for animations."
		},
		{
			title: "Waitstaff Calculator",
			link: "//gfed53.github.io/waitstaff-calc/#/",
			ghlink: "//github.com/gfed53/waitstaff-calc",
			image: "./images-min/waitstaff.png",
			blurb: "An example of working with scope in Angular.js, as well as ngView for multiple views within a single app. Also takes advantage of Material Design Lite to boost its UI/UX appeal."
		},
		{
			title: "Countries and Capitals",
			link: "//gfed53.github.io/countries-and-capitals-app/app/#!/",
			ghlink: "//github.com/gfed53/countries-and-capitals-app",
			image: "./images-min/count-cap-alt.png",
			blurb: "An example of using a more advanced directory structure to modularize a larger app, one which involves using the GeoNames Web Services to utilize data in different ways. Also implements UI Bootstrap for Angular.js."
		},
		{
			title: "Calendar Directive App",
			link: "//gfed53.github.io/angular-js-calendar-directive-challenge/app/",
			ghlink: "//github.com/gfed53/angular-js-calendar-directive-challenge",
			image: "./images-min/calendar.png",
			blurb: "An app demonstrating essential usage of a custom Angular.js directive."
		}
		];



		return {
			projectsArray: projectsArray
		};
	}
}

	function myQuoteLib(){
		return function(){
			var quotes = [
			{
				quote: "\“Be happy, but never satisfied.\”",
				author: "Bruce Lee"
			},
			{
				quote: "\"Negativity is the enemy of creativity\"",
				author: "David Lynch"
			},		
			{
				quote: "\"Without deviation progress is not possible.\"",
				author: "Frank Zappa"
			},		
			];

			return {
				randQuote: randQuote
			}

			function randQuote(){
				return quotes[Math.floor(Math.random()*quotes.length)];
			}			
		}
	}


