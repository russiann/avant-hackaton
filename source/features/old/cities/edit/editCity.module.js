/* @ngInject */
const Run = () => {};

/* @ngInject */
const Config = ($stateProvider) => {
  return $stateProvider.state('editCity', {
    url: '/city/:id',
    templateUrl: 'editCity.view.html',
    controller: 'EditCityController',
    controllerAs: 'vm'
  });
};

angular.module('app.cities.edit', [])
  .run(Run)
  .config(Config);
