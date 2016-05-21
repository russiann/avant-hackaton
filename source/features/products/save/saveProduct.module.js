/* @ngInject */
const Run = () => {};

/* @ngInject */
const Config = ($stateProvider) => {
  return $stateProvider.state('saveProduct', {
    url: '/companies/:companyId/products/new',
    templateUrl: 'saveProduct.view.html',
    controller: 'SaveProductController',
    controllerAs: 'vm'
  });
};

angular.module('app.products.save', [])
  .run(Run)
  .config(Config);
