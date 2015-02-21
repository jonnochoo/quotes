app.controller('TagsController', ['$scope', '$http', '$location', '$rootScope', function($scope, $http, $location, $rootScope){
  
  $scope.isLoading = true;
  
  $scope.init = function() {
    $scope.refresh();
  };

  $scope.refresh = function(){
    $scope.isLoading = true;
    $scope.tags = null;
    $http.get('/api/tags').success(function(data){
      $scope.tags = data;
      $scope.isLoading = false;
    });
  };

  $scope.changeView = function(view){
    $location.path(view); // path not hash
  };

  $scope.init();
}]);