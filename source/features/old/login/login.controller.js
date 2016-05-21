class LoginController {
  /* @ngInject */
  constructor (Feathers, $localStorage, $state){
    const vm = this;
    vm.app = Feathers.app;
    vm.$localStorage = $localStorage;
    vm.user = {};
    this.$state = $state;
    console.log(vm.app.get('user'));
  }

  auth (user){
    this.app.authenticate({
      type: 'local',
      'email': user.email,
      'password': user.password
    }).then( result => {
      console.log(result);
      this.$localStorage.user = this.app.get('user');
      this.$localStorage.token = this.app.get('token');
      this.$state.go('dashboard');
    }).catch( error => {
      console.log(error);
    });
  }
}

angular.module('app.login')
  .controller('LoginController', LoginController);
