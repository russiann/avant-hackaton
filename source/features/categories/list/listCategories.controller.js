class ListCategoriesController {
  /* @ngInject */
  constructor (CategoryService) {
    this.CategoryService = CategoryService;
    this.fetchCategories();
  }

  fetchCategories() {
    this.CategoryService.list()
    .then((res) => {
      this.categories = res.data
      console.log(res.data);
    })
  }

}

angular.module('app.categories.list')
  .controller('ListCategoriesController', ListCategoriesController);
