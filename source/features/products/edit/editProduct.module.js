/* @ngInject */
const Run = () => {};

/* @ngInject */
const Config = ($stateProvider) => {
  return $stateProvider.state('editProduct', {
    url: '/companies/:companyId/products/edit/:id',
    templateUrl: 'editProduct.view.html',
    controller: 'EditProductController',
    controllerAs: 'vm'
  });
};

angular.module('app.products.edit', [])
  .run(Run)
  .config(Config);
