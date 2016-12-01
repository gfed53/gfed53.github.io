angular
.module("myApp")
.factory("myProjects", [myProjects])
.factory("myQuoteLib", [myQuoteLib])
.factory("myDropdown", ["$q", myDropdown])

function myProjects(){
	return function(){
		var projectsArray = [
			{
				title: "The Swiss Army YouTube Searcher",
				link: "//gfed53.github.io/youtube-searcher/src/",
				ghlink: "//github.com/gfed53/youtube-searcher",
				image: "./images-min/says.png",
				blurb: "Using YouTube's Data API, the Google Maps API, and the Yandex Translator API, this app showcases CORS requests and also implements UI.Router for AngularJS, which deals with states and nested views to make a more modularized app."
			},
			{
				title: "Using API's with Audio Swirl",
				link: "//gfed53.github.io/audio-swirl/src/",
				ghlink: "//github.com/gfed53/audio-swirl",
				image: "./images-min/audio-swirl.png",
				blurb: "Using the TASTEKiD and Google Maps APIs, this app showcases the power of APIs and JSON objects, as well as AngularJS's UI.Router to promote modularity through nested states and views."
			},
			{
				title: "Game Development with Flying Hadouken",
				link: "//gfed53.github.io/flappy-bird/flappy-bird/",
				ghlink: "//github.com/gfed53/flappy-bird",
				image: "./images-min/fbird.png",
				blurb: "An app with a landing page that brings together HTML Canvas, an Entity Component System, and a bit of physics in creating a Flappy Bird clone. Also demonstrates Sass for CSS preprocessing, and Gulp as a build-tool."
			},		
			{
				title: "Flickr 'round the World",
				link: "//gfed53.github.io/flickr-search/src",
				ghlink: "//github.com/gfed53/flickr-search",
				image: "./images-min/flickr-world.png",
				blurb: "An AngularJS API mashup that utilizes built-in services to handle RESTful requests and promises."
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

		function randQuote(){
			return quotes[Math.floor(Math.random()*quotes.length)];
		}	

		return {
			randQuote: randQuote
		}	
	}
}

function myDropdown($q){
	return function(){
		var open = false;
		function getStatus(){
			return open;
		}

		function init(element, callback){
			document.addEventListener("click", function(e){
				if(!element.is(e.target) && element.has(e.target).length === 0){
					if(document.getElementById("menu-dropdown-content")){
						open = false;
						callback();
					}
				}
			});
		}
		var services = {
			init: init,
			open: open,
			getStatus: getStatus
		}
		return services;

	}
}




