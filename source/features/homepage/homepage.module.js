/* @ngInject */
const Run = () => {};

/* @ngInject */
const Config = ($stateProvider) => {
  return $stateProvider.state('homepage', {
    url: '/',
    templateUrl: 'homepage.view.html',
    controller: 'HomeController',
    controllerAs: 'vm'
  });
};

angular.module('app.homepage', [])
  .run(Run)
  .config(Config);
