class blockEditController {
  /* @ngInject */
  constructor (Feathers, $localStorage, SweetAlert){
    this.$localStorage = $localStorage;
    this.SweetAlert    = SweetAlert;
    this.app           = Feathers.app;

    // Models
    this.block = {};
  }

  createBlock (informations){
    console.log(informations);
  };

  createQuatrain (informations){
    console.log(informations);
  };

}

angular.module('app.blockEdit')
  .controller('blockEditController', blockEditController);
