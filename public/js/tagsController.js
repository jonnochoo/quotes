app.controller('TagsController', ['$scope', '$http', '$location', '$rootScope', 'quoteApiUrl', function($scope, $http, $location, $rootScope, quoteApiUrl){
  
  $scope.isLoading = true;
  
  $scope.init = function() {
    $scope.refresh();
  };

  $scope.refresh = function(){
    $scope.isLoading = true;
    $scope.tags = null;
    $http.get(quoteApiUrl + '/api/tags').success(function(data){
      $scope.tags = data;
      $scope.isLoading = false;
    });
  };

  $scope.changeView = function(view){
    $location.path(view); // path not hash
  };

  $scope.init();
}]);