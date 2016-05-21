
/* @ngInject */
const Run = (amMoment) => {
  return amMoment.changeLocale('pt-br');
};

/* @ngInject */
const Config = ($stateProvider, $urlRouterProvider) => {
  $stateProvider.state('app', {
    url: '/login',
    controller: 'LoginController',
    controllerAs: 'root',
    templateUrl: 'login.view.html'
  });

  $urlRouterProvider.otherwise('/categories');
};

angular.module('app', [
  'app.3dparty',
  'app.common',
  'app.features'
  ])
    .run(Run)
    .config(Config)
    .value('api', {
      host: 'http://demo6667629.mockable.io'
    })
