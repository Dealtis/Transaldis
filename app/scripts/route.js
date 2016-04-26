angular.module('transaldisAngularGruntApp')
.config(['$routeProvider',
    function($routeProvider) {
        // Système de routage
        $routeProvider
        .when('/', {
            templateUrl: 'views/accueil.html',
            controller: 'ListActu'
        })
        .when('/home', {
            templateUrl: 'views/accueil.html',
            controller: 'ListActu'
        })
        .when('/solutions', {
            templateUrl: 'views/service.html',
            controller: 'ServiceCtrl'
        })
        .when('/devis', {
            templateUrl: 'views/devis.html'
        })
        .when('/suividelivraison', {
            templateUrl: 'views/not.html'
        })
        .when('/entreprise', {
            templateUrl: 'views/entreprise.html'
        })
        .when('/equipe', {
            templateUrl: 'views/equipe.html'
        })
        .when('/nouvelles', {
            templateUrl: 'views/nouvelles.html',
            controller: 'ListActu'
        })
        .when('/medias', {
            templateUrl: 'views/media.html'
        })
        .when('/emplois', {
            templateUrl: 'views/emplois.html'
        })
        .when('/contact', {
            templateUrl: 'views/contact.html'
        })
        .otherwise({
            redirectTo: '/home'
        });
    }
])

// This is the key to view transition happiness!
.run(function ($rootScope, $document) {
  $rootScope.$on('$routeChangeSuccess', function () {
     $document.scrollTopAnimated(0,800)
  });
});
