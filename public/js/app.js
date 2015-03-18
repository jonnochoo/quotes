'use strict';

angular.module('app', ['ngRoute', 'ngAnimate'])  
  .config(['$routeProvider', function($routeProvider, $locationProvider){
    $routeProvider
      .when('/', { controller: 'IndexController', controllerAs: 'vm', templateUrl: '/templates/index' })
      .when('/quote/new', { controller: 'AddQuoteController', templateUrl: '/templates/addQuote' })
      .when('/quote/random', { controller: 'RandomQuoteController', controllerAs: 'vm', templateUrl: '/templates/randomQuote' })
      .when('/quotes/tag/:tag', { controller: 'TagQuoteController', controllerAs: 'vm', templateUrl: '/templates/tagQuote' })
      .when('/quote/edit/:id', { controller: 'EditQuoteController', controllerAs: 'vm', templateUrl: '/templates/editQuote' })
      .when('/tags', { controller: 'TagsController', controllerAs: 'vm', templateUrl: '/templates/tags' })
      .otherwise({ redirectTo: '/'});
  }]);