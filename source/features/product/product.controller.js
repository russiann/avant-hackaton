class ProductController {
  /* @ngInject */
  constructor ($rootScope) {
    $rootScope.hideMenu = true;
  }

}

angular.module('app.product')
  .controller('ProductController', ProductController);
