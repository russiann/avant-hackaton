class EditSupplyController {
  /* @ngInject */
  constructor ($scope, Feathers, $stateParams){
    this.app    = Feathers.app;
    this.$scope = $scope;

    // init
    this.fetchCities();
    this.fetchSupply($stateParams.id);
  }

  fetchSupply(id) {
    const Supply = this.app.service('supplies');
    Supply.get(id)
    .then(res => {
      this.$scope.$apply(()=>{
        this.supply = res;
      })
    });
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
    Supplies.patch(supply._id, supply)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    })
  }

}

angular.module('app.supplies.edit')
  .controller('EditSupplyController', EditSupplyController);
