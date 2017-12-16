angular.module('video-player')
.service('youTube', function($http) {

  this.searchConfig = {key: window.YOUTUBE_API_KEY, part: 'snippet', max: 5, 
    q: ''}; // turn into a variable holding input text value
  
  this.search = function(cb, searchText) {
    this.searchConfig.q = searchText;
    $http.get('https://www.googleapis.com/youtube/v3/search', {params: this.searchConfig})
      .then(function(response) {
        cb(response.data.items);
      },
      function(response) {
        console.log('you FAILED !');
      });

  };

});
