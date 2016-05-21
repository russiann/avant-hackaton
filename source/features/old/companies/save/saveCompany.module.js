/* @ngInject */
const Run = () => {};

/* @ngInject */
const Config = ($stateProvider) => {
  return $stateProvider.state('saveCompany', {
    url: '/companies/new',
    templateUrl: 'saveCompany.view.html',
    controller: 'SaveCompanyController',
    controllerAs: 'vm'
  });
};

angular.module('app.companies.save', [])
  .run(Run)
  .config(Config);
