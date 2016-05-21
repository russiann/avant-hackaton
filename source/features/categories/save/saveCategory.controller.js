class SaveCategoryController {
  /* @ngInject */
  constructor (CategoryService){
    this.CategoryService = CategoryService;
  }

  save(category) {

  }

}

angular.module('app.categories.save')
  .controller('SaveCategoryController', SaveCategoryController);
