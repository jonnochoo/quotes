'use strict';

var app = angular.module('app', ['ngRoute', 'ngAnimate']);

app.config(['$routeProvider', function($routeProvider, $locationProvider){
    $routeProvider
      .when('/', { controller: 'IndexController', templateUrl: '/templates/index' })
      .when('/quote/new', { controller: 'AddQuoteController', templateUrl: '/templates/addQuote' })
      .when('/quote/random', { controller: 'RandomQuoteController', templateUrl: '/templates/randomQuote' })
      .when('/quotes/tag/:tag', { controller: 'TagQuoteController', templateUrl: '/templates/tagQuote' })
      .when('/quote/edit/:id', { controller: 'EditQuoteController', templateUrl: '/templates/editQuote' })
      .when('/tags', { controller: 'TagsController', templateUrl: '/templates/tags' })
      .otherwise({ redirectTo: '/'});
  }]);

app.constant('quoteApiUrl', 'http://quotes-api.jonnochoo.com/');
app.directive('animateList', function($animate) {
    return {
      link: function(scope, element, attrs) {
        scope.$watch(attrs.uiFadeToggle, function(val, oldVal) {
          if(val === oldVal) return; // Skip inital call
          console.log('change');
          element[val ? 'fadeIn' : 'fadeOut'](1000);
        });
      }
    };
  });