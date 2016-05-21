/* @ngInject */
const Run = () => {};

/* @ngInject */
const Config = ($stateProvider) => {
  return $stateProvider.state('saveCategory', {
    url: '/categories/new',
    templateUrl: 'saveCategory.view.html',
    controller: 'SaveCategoryController',
    controllerAs: 'vm'
  });
};

angular.module('app.categories.save', [])
  .run(Run)
  .config(Config);
