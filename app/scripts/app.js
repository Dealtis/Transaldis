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
    'duScroll'
  ])
  .config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = false;
    cfpLoadingBarProvider.latencyThreshold = 0;
  }]);
