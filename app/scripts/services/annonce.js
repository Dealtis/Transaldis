'use strict';

/**
 * @ngdoc service
 * @name transaldisAngularGruntApp.annonce
 * @description
 * # annonce
 * Service in the transaldisAngularGruntApp.
 */
angular.module('transaldisAngularGruntApp')
  .service('annonce', function ($firebaseArray) {
    this.loadAnnonce = function () {
      var ref = new Firebase("https://blazing-fire-1585.firebaseio.com/annonces");
      return $firebaseArray(ref);
    }
  });
