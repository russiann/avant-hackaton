/* @ngInject */
const Run = () => {};

/* @ngInject */
const Config = ($stateProvider) => {
  return $stateProvider.state('editCompany', {
    url: '/companies/:id',
    templateUrl: 'editCompany.view.html',
    controller: 'EditCompanyController',
    controllerAs: 'vm'
  });
};

angular.module('app.companies.edit', [])
  .run(Run)
  .config(Config);
