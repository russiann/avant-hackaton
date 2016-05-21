class HomeController {
  /* @ngInject */
  constructor ($rootScope) {
    $rootScope.hideMenu = true;
  }

}

angular.module('app.homepage')
  .controller('HomeController', HomeController);
