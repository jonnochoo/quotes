app.controller('AddQuoteController', ['$scope', '$http', '$location', function($scope, $http, $location){
  
  $scope.changeView = function(view){
    $location.path(view); // path not hash
  };

  $scope.addQuote = function(view){
    if($scope.form.$valid){
      displayInfoMessage("Saving...");

      if($scope.quote.tags){
        $scope.quote.tags = $scope.quote.tags.split(',');
      }

      $http.post('/api/quotes', $scope.quote)
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
    $scope.message = { text: msg, type: "info" };
  };

  function displayErrorMessage(msg){
    $scope.message = { text: msg, type: "error" };
  };

}]);