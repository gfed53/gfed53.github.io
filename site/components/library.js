angular
.module('myApp')
.factory('myProjects', [myProjects])
.factory('myQuoteLib', [myQuoteLib])

function myProjects(){
	return function(){
		var projectsArray = [
			{
				title: "Hacking The Times",
				link: "./images/times10_13_15.png",
				image: "./images/times10_13_15.png",
				blurb: "An early task demonstrating the benefits of Chrome Developer Tools."
			},
			{
				title: "Karma Landing Page (using basic CSS3)",
				link: "//gfed53.github.io/startup-new/index.html",
				image: "./images/karma-withoutboot.png",
				blurb: "Building a landing page from scratch. This demonstrates usage of basic HTML and CSS."
			},
			{
				title: "Karma Landing Page (using Bootstrap)",
				link: "//gfed53.github.io/karma-withboot/index.html",
				image: "./images/karma-withboot.png",
				blurb: "Similiar to the original Karma page, this project demonstrates the basic benefits of using Bootstrap to simplify format as well as responsive design."
			},
			{
				title: "jQuery Street Fighter",
				link: "//gfed53.github.io/jquery-streetfighter/main.html",
				image: "./images/sf.png",
				blurb: "A display of using fundamental jQuery knowledge to bring an iconic video game character to life."
			},
			{
				title: "Shopping List App",
				link: "//gfed53.github.io/shopping-list-app/index.html",
				image: "./images/quicklist.png",
				blurb: "Using fundamental Javascript and jQuery to create a simple app for grocery shopping."
			},
			{
				title: "Hot-or-Cold Starter",
				link: "//gfed53.github.io/hot-or-cold-starter/index.html",
				image: "./images/hot-or-cold.png",
				blurb: "Using Javascript control flow to create a guessing-game-app."
			},	
			{
				title: "Quiz on Modern Culture",
				link: "//gfed53.github.io/quiz-app/index.html",
				image: "./images/quizapp.png",
				blurb: "An example of using basic object-oriented programming in a project."
			},
			{
				title: "Using API's with Media Swirl",
				link: "//gfed53.github.io/API-Hack/index.html",
				image: "./images/mediaswirl.png",
				blurb: "Using the TASTEKiD API, this app showcases the power of APIs and JSON objects."
			},
			{
				title: "Game Development with Flying Hadouken",
				link: "//gfed53.github.io/flappy-bird/site/index.html",
				image: "./images/fbird.png",
				blurb: "A app with a landing page that brings together HTML Canvas, an Entity Component System, and a bit of physics in creating a Flappy Bird clone. Also demonstrates SASS for CSS preprocessing, and Gulp as a build-tool."
			},		
			{
				title: "ngMadLibs",
				link: "//gfed53.github.io/ng-madlibs/",
				image: "./images/ng-madlibs.png",
				blurb: "An app that showcases basic usage of Angular.js's built-in directives as well as ngMessages for validation, and ngAnimate for animations."
			},
			{
				title: "Waitstaff Calculator",
				link: "//gfed53.github.io/waitstaff-calc/#/",
				image: "./images/waitstaff.png",
				blurb: "An example of working with scope in Angular.js, as well as ngView for multiple views within a single app. Also takes advantage of Material Design Lite to boost its UI/UX appeal."
			},
			{
				title: "Flickr Searcher",
				link: "//gfed53.github.io/flickr-search/",
				image: "./images/flickr.png",
				blurb: "Using Angular to create an API-driven app that utilizes built-in services to handle RESTful requests and promises."
			},
			{
				title: "Countries and Capitals",
				link: "//gfed53.github.io/countries-and-capitals-app/app/#!/",
				image: "./images/count-cap-alt.png",
				blurb: "An example of using a more advanced directory structure to modularize a larger app, one which involves using the GeoNames Web Services to utilize data in different ways. Also implements UI Bootstrap for Angular.js."
			},
			{
				title: "Calendar Directive App",
				link: "//gfed53.github.io/angular-js-calendar-directive-challenge/app/",
				image: "./images/calendar.png",
				blurb: "An app demonstrating essential usage of a custom Angular.js directive."
			},
			{
				title: "Ultimate YouTube Searcher",
				link: "//gfed53.github.io/ultimate-youtube-searcher/src/#/about",
				image: "./images/ult-youtube.png",
				blurb: "Using YouTube's Data API, this app showcases CORS requests and also implements ui.router for Angular.js, which deals with states and nested views to make a more modularized app."
			}
			// {
			// 	title:
			// 	link:
			// 	image:
			// 	blurb:
			// },
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


