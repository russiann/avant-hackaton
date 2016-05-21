/* @ngInject */
const Run = () => {};

/* @ngInject */
const Config = ($stateProvider) => {
  return $stateProvider.state('saveSupply', {
    url: '/supplies/new',
    templateUrl: 'saveSupply.view.html',
    controller: 'SaveSupplyController',
    controllerAs: 'vm'
  });
};

angular.module('app.supplies.save', [])
  .run(Run)
  .config(Config);
