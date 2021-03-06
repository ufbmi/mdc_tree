'use strict';

/**
 * @ngdoc overview
 * @name pubsApp
 * @description
 * # pubsApp
 *
 * Main module of the application.
 */
angular
  .module('mdsApp', [
    'ui.bootstrap',
  'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        
      });
  });
