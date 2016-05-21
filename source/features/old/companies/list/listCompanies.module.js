/* @ngInject */
const Run = () => {};

/* @ngInject */
const Config = ($stateProvider) => {
  return $stateProvider.state('listCompanies', {
    url: '/companies',
    templateUrl: 'listCompanies.view.html',
    controller: 'ListCompaniesController',
    controllerAs: 'vm'
  });
};

angular.module('app.companies.list', [])
  .run(Run)
  .config(Config);
