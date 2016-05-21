/* @ngInject */
const Run = () => {};

/* @ngInject */
const Config = ($stateProvider) => {
  return $stateProvider.state('cart', {
    url: '/cart',
    templateUrl: 'cart.view.html',
    controller: 'CartController',
    controllerAs: 'vm'
  });
};

angular.module('app.cart', [])
  .run(Run)
  .config(Config);
