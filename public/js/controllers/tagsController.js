(function() {
  'use strict';

  angular.module('app')
    .controller('TagsController', Controller);

    Controller.$inject = ['$http', '$location', '$rootScope', 'quoteApiUrl'];

    function Controller($http, $location, $rootScope, quoteApiUrl){
      var vm = this;
      vm.isLoading = true;
      
      vm.init = function() {
        vm.refresh();
      };

      vm.refresh = function(){
        vm.isLoading = true;
        vm.tags = null;
        $http.get(quoteApiUrl + '/api/tags').success(function(data){
          vm.tags = data;
          vm.isLoading = false;
        });
      };

      vm.init();
    }

})();