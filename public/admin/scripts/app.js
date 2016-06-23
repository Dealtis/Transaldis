angular.module('App', [])
.controller('ListActuController', ['$scope','$http', function($scope,$http) {
  $scope.actunew = {};
  $scope.actus = [];
  $http.get('http://localhost/Angular/Transaldis_Admin_Angular/app/api/api.php/actualite/?transform=1').success(function (data) {
    $scope.actus = data.actualite;
  });
  $scope.uploadFile = function(event){
    $scope.actunew.actu_imgsrc = event.target.files[0].name;
  };
  $scope.deleteActu = function(actu_id,index){
    $http.delete('http://localhost/Angular/Transaldis_Admin_Angular/app/api/api.php/actualite/'+actu_id).success(function(){
      $scope.actus.splice(index, 1);
    });
  };
  $scope.addActu = function(actu){
    console.log(">"+$scope.actunew.actu_imgsrc);
    $http.post('http://localhost/Angular/Transaldis_Admin_Angular/app/api/api.php/actualite',$scope.actunew)
    .success(function(response){
      $scope.actunew.actu_id = response;
      //$('#inputfile').fileinput('upload');
      //$('#inputfile').on('filebatchuploadsuccess', function(event, files, extra) { });
      $scope.actus.push($scope.actunew);
      console.log($scope.actunew);
      $scope.actunew = {};
      $('#myModal').modal('toggle');
    }
  );
};
}])
.directive('customOnChange', function() {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
      var onChangeHandler = scope.$eval(attrs.customOnChange);
      element.bind('change', onChangeHandler);
    }
  };
});
