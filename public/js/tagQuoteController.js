app.controller('TagQuoteController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
  
  $scope.isLoading = true;
  
  $scope.init = function() {
    $scope.refresh();
  };

  $scope.refresh = function(){
    $scope.isLoading = true;
    $scope.quotes = null;
    $http.get('/api/quotes/tag/' + $routeParams.tag).success(function(data){
      $scope.quotes = data;
      $scope.isLoading = false;
    });
  };

  $scope.changeView = function(view){
    $location.path(view); // path not hash
  };

  $scope.init();
}]);