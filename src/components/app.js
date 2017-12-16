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
    this.onClick = function(video) {
      console.log('onClick working');
      this.currentVideo = video;
      this.frameUrl = 'https://www.youtube.com/embed/' + video.id.videoId;
    }.bind(this); 
  
  } 
});

//write a handler in this controller to set this.currentVideo
//to the video we click on in videolistentry