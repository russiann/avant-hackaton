class CartController {
  /* @ngInject */
  constructor ($rootScope) {
    $rootScope.hideMenu = true;
  }

}

angular.module('app.cart')
  .controller('CartController', CartController);
