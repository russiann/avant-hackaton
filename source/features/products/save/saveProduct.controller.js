class SaveProductController {
  /* @ngInject */
  constructor ($scope, Feathers, $stateParams){
    this.$scope    = $scope;
    this.app       = Feathers.app;
    this.companyId = $stateParams.companyId;

    // init
    this.fetchCategories();
  }

  fetchCategories() {
    const Categories = this.app.service('categories');
    Categories.find({
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
    Products.create(product)
    .then((result) => {
      console.log(result);
      window.history.back();
    })
    .catch((err) => {
      console.log(err);
    })
  }

}

angular.module('app.products.save')
  .controller('SaveProductController', SaveProductController);
