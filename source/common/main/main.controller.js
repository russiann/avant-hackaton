class MainController {
  /* @ngInject */
  constructor (Auth, CartService) {
    this.Auth = Auth;
    this.CartService = CartService;
  }

  isLogged () {
    return this.Auth.isLogged();
  }

  cartCount() {
    return this.CartService.count();
  }

  addItem(item) {
    this.CartService.addItem(item);
  }

  removeItem(item, index) {
    this.CartService.removeItem(item, index);
  }

}

angular.module('app.main')
  .controller('MainController', MainController);
