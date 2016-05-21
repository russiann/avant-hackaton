/* @ngInject */
const Run = () => {};

/* @ngInject */
const Config = ($stateProvider) => {
  $stateProvider.state('blockEdit', {
    url: '/blocks/edit',
    templateUrl: 'blockEdit.view.html',
    controller: 'blockEditController',
    controllerAs: 'vm'
  });
};

angular.module('app.blockEdit', [])
  .run(Run)
  .config(Config);
