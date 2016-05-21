class SaveCityController {
  /* @ngInject */
  constructor (Feathers){
    this.app  = Feathers.app;
    this.neighborhoods = [];
  }

  save(city) {
    const Cities = this.app.service('cities');
    city.neighborhoods = this.neighborhoods;
    Cities.create(city)
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

angular.module('app.cities.save')
  .controller('SaveCityController', SaveCityController);
