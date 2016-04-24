angular
.module('myApp')
.factory('myProjects', myProjects)
.factory('myQuoteLib', myQuoteLib)

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
			title: "Shopping List App",
			link: "//gfed53.github.io/shopping-list-app/index.html",
			image: "./images/quicklist.png",
			blurb: "Using fundamental Javascript and jQuery to create a simple app for grocery shopping."
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
			title: "Hot-or-Cold Starter",
			link: "//gfed53.github.io/hot-or-cold-starter/index.html",
			image: "./images/hot-or-cold.png",
			blurb: "Using Javascript control flow to create a guessing-game-app."
		}	
			// {
			// 	title:
			// 	link:
			// 	image:
			// 	blurb:
			// },
			// {
			// 	title:
			// 	link:
			// 	image:
			// 	blurb:
			// },
			// {
			// 	title:
			// 	link:
			// 	image:
			// 	blurb:
			// },
			// {
			// 	title:
			// 	link:
			// 	image:
			// 	blurb:
			// },
			// {
			// 	title:
			// 	link:
			// 	image:
			// 	blurb:
			// },
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


