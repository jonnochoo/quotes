app.controller('EditQuoteController', ['$scope', '$http', '$location', '$routeParams', 'quoteApiUrl', function($scope, $http, $location, $routeParams, quoteApiUrl){
  
  $scope.changeView = function(view){
    $location.path(view); // path not hash
  };

  $scope.isLoading = true;
  
  $scope.init = function() {
    $scope.getQuote();
  };

  $scope.updateQuote = function(view){    
    if($scope.form.$valid){
      displayInfoMessage("Saving...");
      console.log($scope.quote);
      if($scope.quote.tags.length > 0){
        $scope.quote.tags = $scope.quote.tags.split(',');
      }

      $http.put(quoteApiUrl + '/api/quotes/' + $routeParams.id, { 
        author: $scope.quote.author,
        text: $scope.quote.text,
        source: $scope.quote.source,
        tags: $scope.quote.tags
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

  $scope.getQuote = function(){
    $scope.isLoading = true;
    $http.get(quoteApiUrl + '/api/quotes/' + $routeParams.id)
      .success(function(data){        
        $scope.isLoading = false;
        $scope.quote = data;
      })
      .error(function(){
        $scope.isLoading = false;
        displayErrorMessage("Oh no! Looks like something went wrong.");
      });
  };

  function displayInfoMessage(msg){
    $scope.message = { text: msg, type: "info" };
  };

  function displayErrorMessage(msg){
    $scope.message = { text: msg, type: "error" };
  };

  $scope.init();
}]);