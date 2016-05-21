/* @ngInject */
const Run = () => {};

/* @ngInject */
const Config = ($stateProvider) => {
  return $stateProvider.state('listProducts', {
    url: '/products',
    templateUrl: 'listProducts.view.html',
    controller: 'ListProductsController',
    controllerAs: 'vm'
  });
};

angular.module('app.products.list', [])
  .run(Run)
  .config(Config);
