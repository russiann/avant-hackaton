class MainController {
  /* @ngInject */
  constructor (Auth, $state) {
    this.Auth = Auth;
    this.$state = $state;
  }

  isLogged () {
    return this.Auth.isLogged();
  }

  goTo (stateName, params) {
    this.$state.go(stateName, params);
  }
}

angular.module('app.main')
  .controller('MainController', MainController);
