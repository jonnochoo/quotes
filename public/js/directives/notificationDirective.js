(function() {
  'use strict';

  angular
    .module('app')
    .directive('jcNotification', notification);

  function notification() {
    var directive = {
        template: '<div ng-show="vm.message.length > 0" class="notification">{{vm.message}}</div>',
        restrict: 'EA',
        controller: function($scope, notificationService) {
          $scope.vm = notificationService;
        }
    };
    return directive;
  }

})();