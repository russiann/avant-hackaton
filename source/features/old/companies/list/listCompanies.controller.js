class ListCompaniesController {
  /* @ngInject */
  constructor (Feathers, $timeout, $scope) {
    this.$scope = $scope;
    this.app    = Feathers.app;

    // init
    this.fetchCompanies();
  }

  fetchCompanies() {
    const Companies = this.app.service('companies');
    Companies.find()
    .then(res => {
      console.log(res);
      this.$scope.$apply(() => {
        this.companies = res;
      });
    })
  }
}

angular.module('app.companies.list')
  .controller('ListCompaniesController', ListCompaniesController);
