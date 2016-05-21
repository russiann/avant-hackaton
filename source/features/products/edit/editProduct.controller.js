class EditProductController {
  /* @ngInject */
  constructor (Feathers, $stateParams, $scope){
    this.$scope    = $scope;
    this.app       = Feathers.app;
    this.companyId = $stateParams.companyId;

    // init
    this.fetchCategories()
    .then(() => {
      this.fetchProduct($stateParams.id);
    })
  }

  fetchProduct(id) {
    const Products = this.app.service('products');
    Products.get(id)
    .then(res => {
      this.$scope.$apply(() => {
        this.product = res;
      });
    })
  }

  fetchCategories() {
    const Categories = this.app.service('categories');
    return Categories.find({
      query: {
        company: this.companyId
      }
    })
    .then(res => {
      this.$scope.$apply(() => {
        this.categories = res;
      });
    })
  }

  save(product) {
    product.company = this.companyId;
    const Products = this.app.service('products');
    Products.patch(product._id, product)
    .then((result) => {
      console.log(result);
      window.history.back();
    })
    .catch((err) => {
      console.log(err);
    })
  }

}

angular.module('app.products.edit')
  .controller('EditProductController', EditProductController);
