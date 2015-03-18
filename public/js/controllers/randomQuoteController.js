(function() {
  'use strict';

  angular.module('app')
    .controller('RandomQuoteController', Controller);

  Controller.$inject = ['quotesDataService', 'notificationService'];

  function Controller(quotesDataService, notificationService) {
    var vm = this;
    vm.isLoading = true;
    vm.refresh = refresh;

    activate();

    function activate() {
      vm.refresh();
    }
    
    function refresh() {
      vm.isLoading = true;
      quotesDataService.getRandomQuote()
        .then(function(data) {
          vm.quote = data;
          vm.isLoading = false;
        })
        .catch(function(err){
          vm.isLoading = false;
          vm.notificationService = notificationService;
          notificationService.sendErrorNotification(err);
        });
    }
  }

})();  