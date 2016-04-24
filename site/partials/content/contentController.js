angular
.module('myApp')
.controller('ContentCtrl', ['myQuoteLib', ContentCtrl])

function ContentCtrl(myQuoteLib){
	var vm = this;
	vm.quote = myQuoteLib().randQuote();
}