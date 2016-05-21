/* @ngInject */
const Run = () => {};

/* @ngInject */
const Config = ($stateProvider) => {
  return $stateProvider.state('saveCity', {
    url: '/cities/new',
    templateUrl: 'saveCity.view.html',
    controller: 'SaveCityController',
    controllerAs: 'vm'
  });
};

angular.module('app.cities.save', [])
  .run(Run)
  .config(Config);
