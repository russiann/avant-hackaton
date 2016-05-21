/* @ngInject */
const Run = () => {};

/* @ngInject */
const Config = ($stateProvider) => {
  return $stateProvider.state('editCategory', {
    url: '/categories/edit/:id',
    templateUrl: 'editCategory.view.html',
    controller: 'EditCategoryController',
    controllerAs: 'vm'
  });
};

angular.module('app.categories.edit', [])
  .run(Run)
  .config(Config);
