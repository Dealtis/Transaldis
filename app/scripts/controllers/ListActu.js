angular.module('transaldisAngularGruntApp')
.controller('ListActu', function($scope, $http, actualite, $window,actualite) {
  $scope.actus = [];
  $scope.actus = actualite.loadActualite()
  .then(function(response) {
    $scope.actus = response.data;
  });

  if ($window.innerHeight < 940) {
    $scope.numberActu = 3;
    console.log($window.innerHeight);
  }else {
    $scope.numberActu = 4;
    console.log($window.innerHeight);
  }

  $(window).resize(function(){
    $scope.$apply(function(){
      if ($window.innerHeight < 940) {
        $scope.numberActu = 3;
        console.log($window.innerHeight);
      }else {
        $scope.numberActu = 4;
        console.log($window.innerHeight);
      }
    });
  });
});
