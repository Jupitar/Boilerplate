

/** js/app.js (315 bytes) */

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


/** js/controllers.js (139 bytes) */

"use strict";

var routeController = angular.module('routeController', []);

routeController.controller('MainController', function() {

});
//# sourceMappingURL=production.js.map