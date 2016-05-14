angular
.module('myApp')
.controller('HeaderCtrl', ['myQuoteLib', HeaderCtrl])

function HeaderCtrl(myQuoteLib){
	var vm = this;
	vm.quote = myQuoteLib().randQuote();
}