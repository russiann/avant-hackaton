angular.module('after-repeat', [])
  .directive('afterRepeat', ($timeout) =>{
    return (scope, element, attrs) => {
      if (scope.$last) {
        return $timeout(() => {
          return scope.$eval(attrs.afterRepeat);
        });
      }
    };
});
