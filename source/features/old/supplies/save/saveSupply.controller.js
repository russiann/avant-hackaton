class SaveSupplyController {
  /* @ngInject */
  constructor ($scope, Feathers){
    this.app    = Feathers.app;
    this.$scope = $scope;

    // init
    this.fetchCities();
  }

  fetchCities() {
    const Cities = this.app.service('cities');
    Cities.find()
    .then(res => {
      this.$scope.$apply(()=>{
        this.cities = res;
      })
    });
  }

  save(supply) {
    const Supplies = this.app.service('supplies');
    Supplies.create(supply)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    })
  }

}

angular.module('app.supplies.save')
  .controller('SaveSupplyController', SaveSupplyController);
