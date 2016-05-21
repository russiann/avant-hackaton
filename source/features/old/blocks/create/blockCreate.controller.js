class blockCreateController {
  /* @ngInject */
  constructor (Feathers, $localStorage, SweetAlert){
    this.$localStorage = $localStorage;
    this.SweetAlert    = SweetAlert;
    this.app           = Feathers.app;

    // Models
    this.block = {};
  }

  create(blockData) {
    console.log(blockData);
    this.app.service('blocks').create(blockData)
    .then((block) => {
      console.log(block);
    })
    .catch((err) => {
      console.log(err);
    })
  };

}

angular.module('app.blockCreate')
  .controller('blockCreateController', blockCreateController);
