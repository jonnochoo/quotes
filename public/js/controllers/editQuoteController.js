(function() {
  'use strict';

  angular.module('app')
    .controller('EditQuoteController', Controller);

  Controller.$inject = ['$http', '$location', '$routeParams', 'quoteApiUrl'];

  function Controller($http, $location, $routeParams, quoteApiUrl) {
    var vm = this;
    
    vm.changeView = function(view){
      $location.path(view); // path not hash
    };

    vm.isLoading = true;
    
    vm.init = function() {
      vm.getQuote();
    };

    vm.updateQuote = function(view){    
      if(vm.form.$valid){
        displayInfoMessage("Saving...");
        
        if(vm.quote.tags.length > 0){
          vm.quote.tags = vm.quote.tags.split(',');
        }

        $http.put(quoteApiUrl + '/api/quotes/' + $routeParams.id, { 
          author: vm.quote.author,
          text: vm.quote.text,
          source: vm.quote.source,
          tags: vm.quote.tags
        })
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

    vm.getQuote = function(){
      vm.isLoading = true;
      $http.get(quoteApiUrl + '/api/quotes/' + $routeParams.id)
        .success(function(data){        
          vm.isLoading = false;
          vm.quote = data;
        })
        .error(function(){
          vm.isLoading = false;
          displayErrorMessage("Oh no! Looks like something went wrong.");
        });
    };

    function displayInfoMessage(msg){
      vm.message = { text: msg, type: "info" };
    };

    function displayErrorMessage(msg){
      vm.message = { text: msg, type: "error" };
    };

    vm.init();
  }

})();