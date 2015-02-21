app.controller('ParentController', ['$scope', '$rootScope', '$location', function($scope, $rootScope, $location){
  
  var unbind = $rootScope.$on('error', function(e, msg) {
      $scope.message = { 
        type: "error",
        text: msg
      };
  });

  $rootScope.$on('info', function(e, msg) {
      $scope.message = { 
        type: "info",
        text: msg
      };
  });

  $scope.changeView = function(view){
    $location.path(view); // path not hash
  };

  $scope.$on('$destroy', unbind);

}]);