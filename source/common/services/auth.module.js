class Auth {
  /* @ngInject */
  constructor ($localStorage){
    this.$localStorage = $localStorage;
  }

  isLogged () {
    return this.$localStorage.user ? true : false
  }
}
angular.module('app.services.auth', [])
  .service('Auth', Auth)
