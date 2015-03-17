(function() {
  'use strict';

  angular.module('app')
    .controller('IndexController', Controller);

  Controller.$inject = ['$scope', '$http', '$location', '$rootScope', 'quoteApiUrl'];

  function Controller($scope, $http, $location, $rootScope, quoteApiUrl) {

    $scope.isLoading = true;
    
    $scope.init = function() {
      $scope.refresh();
    };

    $scope.refresh = function(){
      $scope.isLoading = true;
      $scope.quotes = null;
      $http.get(quoteApiUrl + '/api/quotes').success(function(data){
        $scope.quotes = data;
        $scope.isLoading = false;
      });
    };

    $scope.changeView = function(view){
      $location.path(view); // path not hash
    };

    $scope.init();
  };

})();