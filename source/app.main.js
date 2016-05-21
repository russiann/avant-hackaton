
/* @ngInject */
const Run = (amMoment) => {
  return amMoment.changeLocale('pt-br');
};

/* @ngInject */
const Config = ($stateProvider, $urlRouterProvider) => {
  $urlRouterProvider.otherwise('/');
};

angular.module('app', [
  'app.3dparty',
  'app.common',
  'app.features'
  ])
    .run(Run)
    .config(Config)
    .value('api', {
      host: 'http://10.2.1.187:3000/api'
    })
