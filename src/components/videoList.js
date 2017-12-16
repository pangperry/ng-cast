angular.module('video-player')
.component('videoList', {
  templateUrl: 'src/templates/videoList.html',

  bindings: {
    videos: '<',
    onClick: '<'
  } 
});

//bind the handler
