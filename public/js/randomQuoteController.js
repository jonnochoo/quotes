app.controller('RandomQuoteController', ['$scope', '$http', '$location', 'quoteApiUrl', function($scope, $http, $location, quoteApiUrl){
  
  $scope.isLoading = true;
  
  $scope.init = function() {
    $scope.refresh();
  };

  $scope.refresh = function(){
    $scope.isLoading = true;
    $scope.quote = null;
    $http.get(quoteApiUrl + '/api/quotes/random').success(function(data){
      $scope.quote = data;
      $scope.isLoading = false;
    });
  };

  $scope.changeView = function(view){
    $location.path(view); // path not hash
  };

  $scope.init();
}]);