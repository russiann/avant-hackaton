/* @ngInject */
const Run = () => {};

/* @ngInject */
const Config = ($stateProvider) => {
  return $stateProvider.state('listCities', {
    url: '/cities',
    templateUrl: 'listCities.view.html',
    controller: 'ListCitiesController',
    controllerAs: 'vm'
  });
};

angular.module('app.cities.list', [])
  .run(Run)
  .config(Config);
