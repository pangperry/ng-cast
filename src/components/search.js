angular.module('video-player')

.component('search', {
  templateUrl: 'src/templates/search.html',
  
  controller: function() {
    this.query = '';
    this.change = function(whatIsThis) {
      // this.query = 
      console.log(whatIsThis);
      this.query = this.inputText;
      // console.log();
    };
  
  },

  bindings: {
    onSearchButton: '<'
  }
});
