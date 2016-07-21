angular.module('myApp')

.directive('myDropdown', [myDropdown]);

function myDropdown(){
	return {
		restrict: 'A',
		scope: {
			open: '='
		},
		controller: 'MenuCtrl',
		link: function (scope, elem, attr, ctrl){
			
			console.log(scope.open);
			console.log(elem);
			console.log(attr);
			console.log(ctrl);
			console.log(elem[0]);
			elem.bind('click', function(){
				// if(document.getElementById('menu-dropdown-content')){
				// 	document.getElementById('menu-dropdown-content')
				// }
			})
			document.addEventListener('click', function(e){
				if(!elem.is(e.target) && elem.has(e.target).length === 0){
					if(document.getElementById('menu-dropdown-content')){
						var content = document.getElementById('menu-dropdown-content'),
						contentClass = content.className;
						content.className = "hidden "+contentClass;
						scope.open = false;
						console.log(scope.open);
					}
				}
			});
		}
	}
}