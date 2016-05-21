/* @ngInject */
const Run = () => {};

/* @ngInject */
const Config = ($stateProvider) => {
  return $stateProvider.state('listCategories', {
    url: '/categories',
    templateUrl: 'listCategories.view.html',
    controller: 'ListCategoriesController',
    controllerAs: 'vm'
  });
};

angular.module('app.categories.list', [])
  .run(Run)
  .config(Config);
