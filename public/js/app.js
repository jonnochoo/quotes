'use strict';

angular.module('app', ['ngRoute', 'ngAnimate'])  
  .config(['$routeProvider', function($routeProvider, $locationProvider){
    $routeProvider
      .when('/', { controller: 'IndexController', templateUrl: '/templates/index' })
      .when('/quote/new', { controller: 'AddQuoteController', templateUrl: '/templates/addQuote' })
      .when('/quote/random', { controller: 'RandomQuoteController', templateUrl: '/templates/randomQuote' })
      .when('/quotes/tag/:tag', { controller: 'TagQuoteController', templateUrl: '/templates/tagQuote' })
      .when('/quote/edit/:id', { controller: 'EditQuoteController', templateUrl: '/templates/editQuote' })
      .when('/tags', { controller: 'TagsController', templateUrl: '/templates/tags' })
      .otherwise({ redirectTo: '/'});
  }]);