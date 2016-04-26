'use strict';

/**
 * @ngdoc function
 * @name transaldisAngularGruntApp.controller:ToastCtrl
 * @description
 * # ToastCtrl
 * Controller of the transaldisAngularGruntApp
 */
var isDlgOpen;
angular.module('transaldisAngularGruntApp')
  .controller('ToastCtrl', function($scope, $mdToast) {
    $scope.showToast = function() {
      $mdToast.show({
        hideDelay: false,
        position: 'bottom right',
        controller: 'ToastTemplateCtrl',
        templateUrl: 'views/toasttemplate.html'
      });
    };
    //$scope.showToast();
  }).controller('ToastTemplateCtrl', function($scope, $mdToast, $mdDialog) {
    $scope.closeToast = function() {
      if (isDlgOpen) return;
      $mdToast
        .hide()
        .then(function() {
          isDlgOpen = false;
        });
    };
  });
