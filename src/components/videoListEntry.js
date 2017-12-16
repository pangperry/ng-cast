angular.module('video-player')
.component('videoListEntry', {
  templateUrl: 'src/templates/videoListEntry.html',

  bindings: {
    video: '<',
    handler: '<',
  },
  // controller: function() {
  //   this.handler = $ctrl.handler;
  // }
});


// bind the handler