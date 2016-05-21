class blockListController {
  /* @ngInject */
  constructor (Feathers, $localStorage, SweetAlert){
    this.$localStorage = $localStorage;
    this.SweetAlert    = SweetAlert;
    this.app           = Feathers.app;

    // Models
    this.block = {};
  }

  getBlocks () {
    this.app.service('blocks')
      .find({
        query: {
          condo: $localStorage.user.condo._id,
          $populate: 'apartaments'
        }
      })
      .then( res => {
        console.log(res);
        this.blocks = res;
      })
  }
}

angular.module('app.blockList')
  .controller('blockListController', blockListController);
