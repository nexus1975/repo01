'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('ImageadayApp.services', [])
    .value('version', '0.1')
    //.constant('config', { baseurl: '//localhost/laravelapp2/public/index.php/objects' } )
    .factory('ImageService', function($http) {          
        var baseurl = '//localhost/laravelapp2/public/index.php/images';
        return {
          insertImage: function(image) {
            return $http({
              url: baseurl,
              method: "POST",
              data: image
            }).
            success(function(data) {
                return data;
            });
          },
          listImages: function() {
            return $http({
              url: baseurl,
              method: "GET"              
            }).
            success(function(data) {
                return data;
            });
          }
        };
    });
  

