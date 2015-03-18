(function() {
  'use strict';

  angular.module('app')
    .controller('IndexController', Controller);

  Controller.$inject = ['$http', '$location', '$rootScope', 'quoteApiUrl'];

  function Controller($http, $location, $rootScope, quoteApiUrl) {
    var vm = this;
    vm.isLoading = true;
    
    vm.init = function() {
      vm.refresh();
    };

    vm.refresh = function(){
      vm.isLoading = true;
      vm.quotes = null;
      $http.get(quoteApiUrl + '/api/quotes').success(function(data){
        vm.quotes = data;
        vm.isLoading = false;
      });
    };

    vm.init();
  };

})();