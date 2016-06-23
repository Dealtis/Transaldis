'use strict';

/**
 * @ngdoc overview
 * @name transaldisAngularGruntApp
 * @description
 * # transaldisAngularGruntApp
 *
 * Main module of the application.
 */
angular
  .module('transaldisAngularGruntApp', [
    'ngAnimate',
    'angular-parallax',
    'ngRoute',
    'ngMaterial',
    'angular-loading-bar',
    'duScroll',
    'uiGmapgoogle-maps'
  ])
  .config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = false;
    cfpLoadingBarProvider.latencyThreshold = 0;
  }]);


angular.element(document).ready(function() {
  loading_screen.finish();
});
window.loading_screen = window.pleaseWait({
  logo: "images/logo_transaldisL.png",
  backgroundColor: '#4E4D4A',
  loadingHtml: '<div class="spinner"> <div class = "double-bounce1" ></div><div class ="double-bounce2"> </div> </div>'
});
