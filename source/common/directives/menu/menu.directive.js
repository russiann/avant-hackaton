const MenuDirective = () => {
	return {
		templateUrl: 'menu.directive.html',
		replace: true,
		restrict: 'E',
		transclude: true

	}	
}

angular.module('app.directive.menu', [])
	.directive('menu', MenuDirective)