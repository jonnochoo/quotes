(function() {
  'use strict';

  angular.module('app')
    .controller('RandomQuoteController', Controller);

  Controller.$inject = ['$http', 'quoteApiUrl'];

  function Controller($http, quoteApiUrl) {
    var vm = this;
    vm.isLoading = true;
    vm.refresh = refresh;

    activate();

    function activate() {
      vm.refresh();
    }
    
    function refresh() {
      vm.isLoading = true;
      $http.get(quoteApiUrl + '/api/quotes/random')
        .success(function(data) {
          vm.quote = data;
          vm.isLoading = false;
        })
        .error(function(err) {
          vm.isLoading = false;
        });
    }
  }

})();  