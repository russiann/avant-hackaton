/* @ngInject */
const Run = () => {};

/* @ngInject */
const Config = ($stateProvider) => {
  $stateProvider.state('blockCreate', {
    url: '/blocks/create',
    templateUrl: 'blockCreate.view.html',
    controller: 'blockCreateController',
    controllerAs: 'vm'
  });
};

angular.module('app.blockCreate', [])
  .run(Run)
  .config(Config);
