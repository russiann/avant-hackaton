class ProductService {
  /* @ngInject */
  constructor ($http, api){
    this.host  = api.host;
    this.$http = $http;
  }

  list() {
    return this.$http.get(`${this.host}/product`);
  }

  create(id) {
    return this.$http.post(`${this.host}/product`);
  }

  get(id) {
    return this.$http.get(`${this.host}/product/1`);
  }

  delete(id) {
    return this.$http.delete(`${this.host}/product/1`);
  }

  update(id) {
    return this.$http.update(`${this.host}/product/1`);
  }

}
angular.module('app.products.service', [])
  .service('ProductService', ProductService)
