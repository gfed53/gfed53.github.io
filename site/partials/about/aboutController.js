angular
.module('myApp')
.controller('AboutCtrl', ['myQuoteLib', 'myViewToggle', AboutCtrl])

function AboutCtrl(myQuoteLib, myViewToggle){
	var vm = this;
	vm.quote = myQuoteLib().randQuote();

	myViewToggle("#mast-about-button", "#extra-about-me");
	myViewToggle("#more-about-button", "#extra-more-about");
}