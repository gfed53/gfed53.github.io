//Factory
//Use the toggle() method as an ng-clickable to toggle display of block element, the 'content' argument.

function myViewToggle(){

	return function(){
		console.log('outer');
		var services = {
			toggle: toggle
		}

		return services;

		function toggle(content){
			console.log('inner');
			var contentStyle = window.getComputedStyle(content);

			button.onclick = function(){
				if(contentStyle.getPropertyValue('display') != 'none'){
					content.style.display = 'none';
				} else {
					content.style.display = 'block';
				}
			}
		}	
	}
}