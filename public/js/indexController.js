app.controller('IndexController', ['$scope', '$http', '$location', '$rootScope', MainCtrl]);

function MainCtrl($scope, $http, $location, $rootScope) {

  $scope.isLoading = true;
  
  $scope.init = function() {
    $scope.refresh();
  };

  $scope.refresh = function(){
    $scope.isLoading = true;
    $scope.quotes = null;
    $http.get('/api/quotes').success(function(data){
      $scope.quotes = data;
      $scope.isLoading = false;
    });
  };

  $scope.changeView = function(view){
    $location.path(view); // path not hash
  };

  $scope.init();
};