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
            templateUrl: 'views/solutions.html'
        })
        .when('/devis', {
            templateUrl: 'views/devis.html'
        })
        .when('/suividelivraison', {
            templateUrl: 'views/devis.html'
        })
        .when('/entreprise', {
            templateUrl: 'views/entreprise.html'
        })
        .when('/nouvelles', {
            templateUrl: 'views/entreprise.html'
        })
        .when('/medias', {
            templateUrl: 'views/entreprise.html'
        })
        .when('/emplois', {
            templateUrl: 'views/entreprise.html'
        })
        .when('/contact', {
            templateUrl: 'views/entreprise.html'
        })
        .otherwise({
            redirectTo: '/home'
        });
    }
]);
