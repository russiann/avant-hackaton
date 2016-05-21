class ListCitiesController {
  /* @ngInject */
  constructor (Feathers, $timeout, $scope) {
    this.$scope = $scope;
    this.app    = Feathers.app;
    this.fetchCities();
  }

  fetchCities() {
    const Cities = this.app.service('cities');
    Cities.find()
    .then(res => {
      this.$scope.$apply(() => {
        this.cities = res;
      });
    })
  }

}

angular.module('app.cities.list')
  .controller('ListCitiesController', ListCitiesController);
