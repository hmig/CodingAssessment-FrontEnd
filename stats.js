var App = angular.module('App', []);

App.controller('StatsCtrl', function($scope, $http) {
  $http.get('teamstats.json')
       .then(function(loadteam){
          $scope.stats = loadteam.data;		   	   
        });  
});


