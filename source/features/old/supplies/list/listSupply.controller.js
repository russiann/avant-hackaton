class ListSupplyController {
  /* @ngInject */
  constructor (Feathers, $timeout, $scope) {
    this.$scope = $scope;
    this.app    = Feathers.app;

    // init
    this.fetchSupplies();
  }

  fetchSupplies() {
    const Supplies = this.app.service('supplies');
    Supplies.find()
    .then(res => {
      this.$scope.$apply(() => {
        this.supplies = res;
      });
    })
  }
}

angular.module('app.supplies.list')
  .controller('ListSupplyController', ListSupplyController);
