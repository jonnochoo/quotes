app.controller('EditQuoteController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
  
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

      if($scope.quote.tags){
        $scope.quote.tags = $scope.quote.tags.split(',');
      }

      console.log($scope.quote);
      $http.put('/api/quotes/' + $routeParams.id, { 
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
    $http.get('/api/quotes/' + $routeParams.id)
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