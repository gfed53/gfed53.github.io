angular
.module("myApp")
.controller("AboutCtrl", ["myQuoteLib", AboutCtrl])

function AboutCtrl(myQuoteLib){
	var vm = this;
	vm.quote = myQuoteLib().randQuote();
}