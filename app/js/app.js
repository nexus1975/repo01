'use strict';

// Declare app level module which depends on filters, and services
angular.module('ImageadayApp', [
  'ngRoute',
  'chieffancypants.loadingBar',
  'ImageadayApp.filters',
  'ImageadayApp.services',
  'ImageadayApp.directives',
  'ImageadayApp.controllers'
]).
config(function(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = true;
}).
config(['$routeProvider', function($routeProvider) {  
  $routeProvider.when('/image', {templateUrl: 'partials/image.html', controller: 'ImageCtrl'});
  $routeProvider.otherwise({redirectTo: '/image'});
}]);
