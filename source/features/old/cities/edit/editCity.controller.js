class EditCityController {
  /* @ngInject */
  constructor (Feathers, $stateParams, $scope){
    this.app    = Feathers.app;
    this.$scope = $scope;

    this.neighborhoods = [];
    this.fetchCity($stateParams.id);
  }

  fetchCity(id) {
    const Cities = this.app.service('cities');
    Cities.get(id)
    .then((res) => {
      console.log(res);
      this.$scope.$apply(()=>{
        this.city = res;
      });
    })
  }

  save(city) {
    if (this.neighborhoods.length === 0) return;
    const Cities = this.app.service('cities');
    city.neighborhoods = city.neighborhoods.concat(this.neighborhoods);
    this.neighborhoods = null;

    Cities.patch(city._id, city)
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  addNeighborhood(neighborhoodName) {
    this.neighborhoodName = null;
    this.neighborhoods.push({name: neighborhoodName})
  }

}

angular.module('app.cities.edit')
  .controller('EditCityController', EditCityController);
