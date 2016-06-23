'use strict';

/**
 * @ngdoc function
 * @name transaldisAngularGruntApp.controller:AnnonceCtrl
 * @description
 * # AnnonceCtrl
 * Controller of the transaldisAngularGruntApp
 */
angular.module('transaldisAngularGruntApp')
  .controller('AnnonceCtrl', function ($scope,annonce) {
    $scope.annonces = annonce.loadAnnonce();
  });
