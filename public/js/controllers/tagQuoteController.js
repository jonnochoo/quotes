(function() {
  'use strict';

  angular.module('app')
    .controller('TagQuoteController', Controller);

  Controller.$inject = ['$http', '$location', '$routeParams'];

  function Controller($http, $location, $routeParams){
    var vm = this;
    vm.isLoading = true;
    
    vm.init = function() {
      vm.refresh();
    };

    vm.refresh = function(){
      vm.isLoading = true;
      vm.quotes = null;
      $http.get('/api/quotes/tag/' + $routeParams.tag).success(function(data){
        vm.quotes = data;
        vm.isLoading = false;
      });
    };

    vm.changeView = function(view){
      $location.path(view); // path not hash
    };

    vm.init();
  }

})();