'use strict';

/**
 * @ngdoc service
 * @name transaldisAngularGruntApp.actualite
 * @description
 * # actualite
 * Service in the transaldisAngularGruntApp.
 */
angular.module('transaldisAngularGruntApp')
  .service('actualite', function ($http) {    
    this.loadActualite = function() {
      return $http.get('http://localhost/angular/Transaldis_Angular_Grunt/app/admin/api/api.php/actualite/?order=actu_id,desc&transform=1');
    }
  });
