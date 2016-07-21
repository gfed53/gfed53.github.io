angular
.module("myApp")
.controller("MenuCtrl", ['$scope', '$element', 'myDropdown', MenuCtrl])

function MenuCtrl($scope, $element, myDropdown){
	var vm = this;
	vm.open = myDropdown().getStatus();
	vm.toggle = toggle;
	myDropdown().init(angular.element('#my-dropbtn'), check);

	function toggle(){
		vm.open = !vm.open;
	}

	function check(){
		$scope.$apply(function(){
			vm.open = myDropdown().getStatus();
		});
	}
	
}