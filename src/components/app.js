angular.module('video-player')

.component('app', {
  templateUrl: 'src/templates/app.html',

  //controller -> this.currentVideo: first video of the videoList Array
  //              this.videoList: []
  //              this.searchYoutube = function ???
  //                  change currentVideo
  //                  change videoList 

  //              this.selectVideo function


  controller: function() {
    this.videos = window.exampleVideoData;
    this.currentVideo = window.exampleVideoData[0];
    this.selectVideo = function() {};
    this.searchResults = function() {};
    this.frameUrl = 'https://www.youtube.com/embed/' + this.currentVideo.id.videoId;  
  } 
});


