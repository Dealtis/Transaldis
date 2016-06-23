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
  $scope.tabIdf = "tab-active";
  $scope.changeTab = function (id) {
    switch (id) {
      case 'idf':
        $scope.tabIdf = "tab-active";
        $scope.tabStj = "";
        $scope.tabMail = "";
        $scope.tabConv = "";
        $scope.tabStock = "";
        $scope.tabProdui = "";
        $scope.tabProduct = "";
        $scope.tabTrac = "";
        $scope.tabDms = "";
        $scope.tabEdi = "";
      break;
      case 'stj':
        $scope.tabIdf = "";
        $scope.tabStj = "tab-active";
        $scope.tabMail = "";
        $scope.tabConv = "";
        $scope.tabStock = "";
        $scope.tabProdui = "";
        $scope.tabProduct = "";
        $scope.tabTrac = "";
        $scope.tabDms = "";
        $scope.tabEdi = "";
      break;
      case 'mail':
        $scope.tabIdf = "";
        $scope.tabStj = "";
        $scope.tabMail = "tab-active";
        $scope.tabConv = "";
        $scope.tabStock = "";
        $scope.tabProdui = "";
        $scope.tabProduct = "";
        $scope.tabTrac = "";
        $scope.tabDms = "";
        $scope.tabEdi = "";
      break;
      case 'conv':
        $scope.tabIdf = "";
        $scope.tabStj = "";
        $scope.tabMail = "";
        $scope.tabConv = "tab-active";
        $scope.tabStock = "";
        $scope.tabProdui = "";
        $scope.tabProduct = "";
        $scope.tabTrac = "";
        $scope.tabDms = "";
        $scope.tabEdi = "";
      break;
      case 'stock':
        $scope.tabIdf = "";
        $scope.tabStj = "";
        $scope.tabMail = "";
        $scope.tabConv = "";
        $scope.tabStock = "tab-active";
        $scope.tabProdui = "";
        $scope.tabProduct = "";
        $scope.tabTrac = "";
        $scope.tabDms = "";
        $scope.tabEdi = "";
      break;
      case 'produi':
        $scope.tabIdf = "";
        $scope.tabStj = "";
        $scope.tabMail = "";
        $scope.tabConv = "";
        $scope.tabStock = "";
        $scope.tabProdui = "tab-active";
        $scope.tabProduct = "";
        $scope.tabTrac = "";
        $scope.tabDms = "";
        $scope.tabEdi = "";
      break;
      case 'produc':
        $scope.tabIdf = "";
        $scope.tabStj = "";
        $scope.tabMail = "";
        $scope.tabConv = "";
        $scope.tabStock = "";
        $scope.tabProdui = "";
        $scope.tabProduct = "tab-active";
        $scope.tabTrac = "";
        $scope.tabDms = "";
        $scope.tabEdi = "";
      break;
      case 'traca':
        $scope.tabIdf = "";
        $scope.tabStj = "";
        $scope.tabMail = "";
        $scope.tabConv = "";
        $scope.tabStock = "";
        $scope.tabProdui = "";
        $scope.tabProduct = "";
        $scope.tabTrac = "tab-active";
        $scope.tabDms = "";
        $scope.tabEdi = "";
      break;
      case 'dms':
        $scope.tabIdf = "";
        $scope.tabStj = "";
        $scope.tabMail = "";
        $scope.tabConv = "";
        $scope.tabStock = "";
        $scope.tabProdui = "";
        $scope.tabProduct = "";
        $scope.tabTrac = "";
        $scope.tabDms = "tab-active";
        $scope.tabEdi = "";
      break;
      case 'edi':
        $scope.tabIdf = "";
        $scope.tabStj = "";
        $scope.tabMail = "";
        $scope.tabConv = "";
        $scope.tabStock = "";
        $scope.tabProdui = "";
        $scope.tabProduct = "";
        $scope.tabTrac = "";
        $scope.tabDms = "";
        $scope.tabEdi = "tab-active";
      break;
      default:
    }
  }
});
