class CartController {
  /* @ngInject */
  constructor ($rootScope, CartService) {
    $rootScope.hideMenu = true;
    this.CartService = CartService;
  }

  getCart() {
    return this.CartService.list();
  }

  addItem(item) {
    this.CartService.addItem(item);
  }

  removeItem(item, index) {
    this.CartService.removeItem(item, index);
  }

}

angular.module('app.cart')
  .controller('CartController', CartController);
