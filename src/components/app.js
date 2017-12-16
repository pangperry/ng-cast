angular.module('video-player')

.component('app', {
  templateUrl: 'src/templates/app.html',

  //controller -> this.currentVideo: first video of the videoList Array
  //              this.videoList: []
  //              this.searchYoutube = function ???
  //                  change currentVideo
  //                  change videoList 

  //              this.selectVideo function


  controller: function(youTube) {
    this.videos = exampleVideoData;
    this.currentVideo = this.videos[0];
    this.queryValue = '';

    this.selectVideo = function(video) {
      this.currentVideo = video;
      this.frameUrl = 'https://www.youtube.com/embed/' + video.id.videoId;
    };

    this.searchResults = function() {};
    
    this.onClick = function(video) {
      console.log('onClick working');
      this.selectVideo(video);
    }.bind(this); 
    
    this.onSearch = function(videos) {
      this.videos = videos;
      this.selectVideo(videos[0]);
    }.bind(this);

    this.onSearchButton = function(text) {
      console.log('clicked');
      this.queryValue = text;
      youTube.search(this.onSearch, this.queryValue);      
    }.bind(this);

    this.result = youTube.search(this.onSearch, this.queryValue);
 
  }
});
