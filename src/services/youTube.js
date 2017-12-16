angular.module('video-player')
.service('youTube', function($http) {

  this.searchConfig = {key: window.YOUTUBE_API_KEY,
                       part: 'snippet',
                       max: 5,
                       q: 'dog'};
  
  this.searchYoutube = function() {
    $http.get('https://www.googleapis.com/youtube/v3/search', {params: this.searchConfig})
  
    .then(function(response) {
      console.log('getting the daaata');
      console.log(response);
    },
    function(response) {
      console.log('you FAILED !');
    });

  };
    // $scope.videos = response.data.items;
    // $scope.statuscode = response.status;
    // $scope.statustext = response.statusText; 
});




// https://www.googleapis.com/youtube/v3/videos




// var app = angular.module('myApp', []);
// app.controller('myCtrl', function($scope, $http) {
//     $http.get("welcome.htm")
//     .then(function(response) {
//         $scope.content = response.data;
//         $scope.statuscode = response.status;
//         $scope.statustext = response.statusText; 
//     });
// });