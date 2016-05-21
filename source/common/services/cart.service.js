class CartService {
  /* @ngInject */
  constructor ($localStorage){
    this.$localStorage = $localStorage;
    this.$localStorage.cart = this.$localStorage.cart || [];
  }

  addItem (item) {
    const index = this.$localStorage.cart.findIndex((i) => i.Id === item.Id);
    if (~index) {
      this.$localStorage.cart[index].quantity++;
    } else {
      item.quantity = 1;
      this.$localStorage.cart.push(item);
    }
  }

  removeItem(item, index) {
    var item = this.$localStorage.cart[index];
    if (item.quantity > 1) {
      this.$localStorage.cart[index].quantity--;
    } else {
      this.$localStorage.cart.splice(index, 1);
    }
  }

  list() {
    return this.$localStorage.cart;
  }

  count() {
    return this.$localStorage.cart.length;
  }
}
angular.module('app.services.cart', [])
  .service('CartService', CartService)
