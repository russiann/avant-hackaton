/* @ngInject */
const Run = () => {};

/* @ngInject */
const Config = ($stateProvider) => {
  return $stateProvider.state('editSupply', {
    url: '/supplies/:id',
    templateUrl: 'editSupply.view.html',
    controller: 'EditSupplyController',
    controllerAs: 'vm'
  });
};

angular.module('app.supplies.edit', [])
  .run(Run)
  .config(Config);
