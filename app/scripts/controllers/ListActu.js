angular.module('transaldisAngularGruntApp')
.controller('ListActu', ['$scope', '$http', 'actualite', '$window', function($scope, $http, actualite, $window) {
  $scope.actus = [];
  $http.get('http://localhost/angular/Transaldis_Angular_Grunt/app/admin/api/api.php/actualite/?order=actu_id,desc&transform=1')
  .success(function(data) {
    $scope.actus = data.actualite;
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
}]);
