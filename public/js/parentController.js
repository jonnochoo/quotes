(function() {
  'use strict';

  angular.module('app')
    .controller('ParentController', Controller);

  Controller.$inject = ['$scope', '$rootScope', '$location'];

  function Controller($scope, $rootScope, $location){
    
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

  }

})();