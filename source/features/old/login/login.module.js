/* @ngInject */
const Run = () => {};

/* @ngInject */
const Config = ($stateProvider) => {
  return $stateProvider.state('login', {
    url: '/login',
    templateUrl: 'login.view.html',
    controller: 'LoginController',
    controllerAs: 'vm'
  });
};

angular.module('app.login', [])
  .run(Run)
  .config(Config);
