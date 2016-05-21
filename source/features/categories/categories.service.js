class CategoryService {
  /* @ngInject */
  constructor ($http, api){
    this.host  = api.host;
    this.$http = $http;
  }

  list() {
    return this.$http.get(`${this.host}/Category`);
  }

  create(id) {
    return this.$http.post(`${this.host}/Category`);
  }

  get(id) {
    return this.$http.get(`${this.host}/Category/1`);
  }

  delete(id) {
    return this.$http.delete(`${this.host}/Category/1`);
  }

  update(id) {
    return this.$http.update(`${this.host}/Category/1`);
  }

}
angular.module('app.categories.service', [])
  .service('CategoryService', CategoryService)
