(function() {
  'use strict';

  angular.module('app')
    .factory('quotesDataService', quotesDataService);

  quotesDataService.$inject = ['$http', 'quoteApiUrl'];

  function quotesDataService($http, quoteApiUrl) {
    return {
      getRandomQuote: getRandomQuote
    };

    function getRandomQuote() {
      return $http.get(quoteApiUrl + '/api/quotes/random')
            .then(getRandomQuoteComplete);

      function getRandomQuoteComplete(response) {
        return response.data;
      }
    }
  }

})();  