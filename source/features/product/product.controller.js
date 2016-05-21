class ProductController {
  /* @ngInject */
  constructor ($rootScope, CartService) {
    $rootScope.hideMenu = true;
    this.CartService    = CartService;
    this.product = {
      Id: 1,
      Name: 'Produto Lorem',
      Price: 20.00
    }
  }

  addItem(item) {
    this.CartService.addItem(item);
  }

  removeItem(item, index) {
    this.CartService.removeItem(item, index);
  }

}

angular.module('app.product')
  .controller('ProductController', ProductController);
