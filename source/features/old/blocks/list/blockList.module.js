/* @ngInject */
const Run = () => {};

/* @ngInject */
const Config = ($stateProvider) => {
  $stateProvider.state('blockList', {
    url: '/blocks/list',
    templateUrl: 'blockList.view.html',
    controller: 'blockListController',
    controllerAs: 'vm'
  });
};

angular.module('app.blockList', [])
  .run(Run)
  .config(Config);
