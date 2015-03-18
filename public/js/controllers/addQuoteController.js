(function() {
  'use strict';

  angular.module('app')
    .controller('AddQuoteController', Controller);

  Controller.$inject = ['$http', '$location', 'quoteApiUrl'];

  function Controller(http, $location, quoteApiUrl){
    var vm = this;

    vm.changeView = function(view){
      $location.path(view); // path not hash
    };

    vm.addQuote = function(view){
      if(vm.form.$valid){
        displayInfoMessage("Saving...");

        if(vm.quote.tags){
          vm.quote.tags = vm.quote.tags.split(',');
        }

        $http.post(quoteApiUrl + '/api/quotes', vm.quote)
        .success(function(){
          $location.path('/');
        })
        .error(function(){
          displayErrorMessage("Oh no! Looks like something went wrong.");
        });
      }
      else{
        displayErrorMessage("The 'Text' field must be filled in.");
      }
    };

    function displayInfoMessage(msg){
      vm.message = { text: msg, type: "info" };
    };

    function displayErrorMessage(msg){
      vm.message = { text: msg, type: "error" };
    };
  }

})();