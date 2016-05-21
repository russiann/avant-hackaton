/* @ngInject */
const Run = () => {};

/* @ngInject */
const Config = ($stateProvider) => {
  return $stateProvider.state('listSupplies', {
    url: '/supplies',
    templateUrl: 'listSupply.view.html',
    controller: 'ListSupplyController',
    controllerAs: 'vm'
  });
};

angular.module('app.supplies.list', [])
  .run(Run)
  .config(Config);
