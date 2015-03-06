"use strict";

var myApp = angular.module('myApp', [
  'ngRoute',
  'routeController'
]);

myApp
.config(['$routeProvider', function($routeProvider) {

  $routeProvider.
  when('/main', {
    templateUrl: 'partials/main.html',
    controller: 'MainController'
  }).
  otherwise({
    redirectTo: '/main'
  });

}]);