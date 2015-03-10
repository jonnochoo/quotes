app.controller('IndexController', ['$scope', '$http', '$location', '$rootScope', 'quoteApiUrl', MainCtrl]);

function MainCtrl($scope, $http, $location, $rootScope, quoteApiUrl) {

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