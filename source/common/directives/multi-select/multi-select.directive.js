const multiSelect = ($timeout, $rootScope) => {
	return {
    restrict: 'A',
    scope: {
      ngModel: "=",
			onChange: "="
    },
    link: (scope, element, attrs) => {
      console.log(scope);
      const input = $(element);
      input.dropdown();
			$rootScope.$on('clear:multiSelect', ()=> {
				$timeout(()=>{
          input.dropdown('clear');
        })
			})
      if (scope.ngModel && scope.ngModel.length > 0) {
        $timeout(()=>{
          input.dropdown('set value', scope.ngModel);
        })
      }
    }
	}
}

angular.module('app.directive.multiSelect', [])
  .directive('multiSelect', multiSelect);
