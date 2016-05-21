/* @ngInject */
const Run = () => {};

/* @ngInject */
const Config = ($stateProvider) => {
  return $stateProvider.state('product', {
    url: '/product',
    templateUrl: 'product.view.html',
    controller: 'ProductController',
    controllerAs: 'vm'
  });
};

angular.module('app.product', [])
  .run(Run)
  .config(Config);
