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
            templateUrl: 'views/service.html'
        })
        .when('/devis', {
            templateUrl: 'views/not.html'
        })
        .when('/suividelivraison', {
            templateUrl: 'views/not.html'
        })
        .when('/entreprise', {
            templateUrl: 'views/entreprise.html'
        })
        .when('/nouvelles', {
            templateUrl: 'views/nouvelles.html',
            controller: 'ListActu'
        })
        .when('/medias', {
            templateUrl: 'views/not.html'
        })
        .when('/emplois', {
            templateUrl: 'views/emplois.html'
        })
        .when('/contact', {
            templateUrl: 'views/not.html'
        })
        .otherwise({
            redirectTo: '/home'
        });
    }
]);
