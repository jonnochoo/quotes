(function() {
  'use strict';

  angular
    .module('app')
    .directive('jcSpinner', spinner);

  function spinner() {
    var directive = {
        templateUrl: '/templates/spinner',        
        restrict: 'EA'
    };
    return directive;
  }

})();