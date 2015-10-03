'use strict';

/* Controllers */

angular.module('ImageadayApp.controllers', []).
    controller('ImageCtrl', ['$scope','$http','ImageService', function($scope, $http, ImageService) {          
        $http({method: 'GET', url: 'http://image-a-day.herokuapp.com/image'}).
            success(function(data, status, headers, config) {
              //var el = angular.element(document.getElementById('photo'));               
              //el.attr('src', data.imageUrl);
              $scope.data = data;
              $('#panel').fadeIn('slow'); 
              ImageService.insertImage(data);
              ImageService.listImages().then(function(data){
                    $scope.allimages = data.data;                    
              });
            })/*.
            fail(function(data, status, headers, config) {
              alert("Ajax request failed. Try again.");
            })*/;   
    }]);


//OLD
//var el = angular.element(document.getElementById('body'));              
//el.css('background-image', 'url('+data.imageUrl+')');

  