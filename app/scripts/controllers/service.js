'use strict';

/**
* @ngdoc function
* @name transaldisAngularGruntApp.controller:ServiceCtrl
* @description
* # ServiceCtrl
* Controller of the transaldisAngularGruntApp
*/
angular.module('transaldisAngularGruntApp')
.controller('ServiceCtrl', function ($scope) {
  $scope.tabHome = "tab-active";
  $scope.changeTab = function (id) {
    switch (id) {
      case 'home':
        $scope.tabHome = "tab-active";
        $scope.tabPro = "";
        $scope.tabNat = "";
      break;
      case 'profile':
        $scope.tabHome = "";
        $scope.tabPro = "tab-active";
        $scope.tabNat = "";
      break;
      case 'messages':
        $scope.tabHome = "";
        $scope.tabPro = "";
        $scope.tabNat = "tab-active";
      break;
      default:
    }
  }
});
