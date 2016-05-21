class ListProductsController {
  /* @ngInject */
  constructor (ProductService) {
    this.ProductService = ProductService;
    this.fetchProducts();
  }

  fetchProducts() {
    this.ProductService.list()
    .then((res) => {
      this.products = res.data
      console.log(res.data);
    })
  }

}

angular.module('app.categories.list')
  .controller('ListProductsController', ListProductsController);
