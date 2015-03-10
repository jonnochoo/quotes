'use strict';

var app = angular.module('app', ['ngRoute', 'ngAnimate']);

app.config(['$routeProvider', function($routeProvider, $locationProvider){
    $routeProvider
      .when('/', { controller: 'IndexController', templateUrl: '/partials/index' })
      .when('/quote/new', { controller: 'AddQuoteController', templateUrl: '/partials/addQuote' })
      .when('/quote/random', { controller: 'RandomQuoteController', templateUrl: '/partials/randomQuote' })
      .when('/quotes/tag/:tag', { controller: 'TagQuoteController', templateUrl: '/partials/tagQuote' })
      .when('/quote/edit/:id', { controller: 'EditQuoteController', templateUrl: '/partials/editQuote' })
      .when('/tags', { controller: 'TagsController', templateUrl: '/partials/tags' })
      .otherwise({ redirectTo: '/'});
  }]);

app.constant('quoteApiUrl', 'http://quotes.jonnochoo.com');
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