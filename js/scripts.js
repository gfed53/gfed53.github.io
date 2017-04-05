/*jshint esversion: 6 */

$(function(){

	//Handlebars

	//Quote

	function quote(){
		$.getJSON('./lib/my-content/quotes.json', (quotes) => {
			const QUOTES_ARRAY = quotes;
			const MY_QUOTE = QUOTES_ARRAY[Math.floor(Math.random()*QUOTES_ARRAY.length)];
			const QUOTE_CONTEXT = {myQuote: MY_QUOTE};

			const QUOTE_SRC = $('#quote-template').html();
			const QUOTE_TEMP = Handlebars.compile(QUOTE_SRC);
			const QUOTE_HTML = QUOTE_TEMP(QUOTE_CONTEXT);

			$('#quote-render').html(QUOTE_HTML);
		});
	}

	//Projects

	function projects(){
		$.getJSON('./lib/my-content/projects.json', (projects) => {
			const MY_PROJECTS = projects;
			const PROJECTS_CONTEXT = {myProjects: MY_PROJECTS};
			const PROJECTS_SRC = $('#projects-template').html();
			const PROJECTS_TEMP = Handlebars.compile(PROJECTS_SRC);
			const PROJECTS_HTML = PROJECTS_TEMP(PROJECTS_CONTEXT);

			$('#projects-render').html(PROJECTS_HTML);
		});
	}

	function init(){
		quote();
		projects();
		fadeIn();
	}

	//Animations
	function fadeIn(){
		$('body').velocity({
			opacity: 1
		},{
			duration: 1300
		});

		setTimeout(()=>{
			$('.mast-head-heading span:nth-child(1)').velocity({
				opacity: 1
			}, {
				duration: 1000
			});

			$('.mast-head-heading span:nth-child(2)').velocity({
				opacity: 1
			}, {
				duration: 1500
			});
		}, 100);
	}


	init();
});