'use strict';

/**
 * @ngdoc function
 * @name transaldisAngularGruntApp.controller:ToastCtrl
 * @description
 * # ToastCtrl
 * Controller of the transaldisAngularGruntApp
 */
var isDlgOpen;
angular.module('transaldisAngularGruntApp')
  .controller('ToastCtrl', function($scope, $mdToast, toast, $firebaseArray,$firebaseObject) {



    var ref = new Firebase("https://blazing-fire-1585.firebaseio.com/toast");

    $scope.toastArray = $firebaseArray(ref);
    
    ref.once('value', function(data) {
      if (data.numChildren() > 0) {
        console.log("sup 0");
        $scope.showToast($firebaseArray(ref));
      } else {
        console.log("inf 0");
      }
    });


    // toast.loadToastFirebase().$loaded()
    // .then(function() {
    //   console.log($scope.toast.numChildren());
    //     console.log("then");
    // });

    $scope.showToast = function(data) {
      $mdToast.show({
        hideDelay: false,
        position: 'bottom right',
        controller: 'ToastTemplateCtrl',
        templateUrl: 'views/toasttemplate.html',
        locals: {
          title: data
        }
      });
    };

  })

.controller('ToastTemplateCtrl', function($scope, $mdToast, $mdDialog, title) {
  $scope.title = title;
  $scope.closeToast = function() {
    if (isDlgOpen) return;
    $mdToast
      .hide()
      .then(function() {
        isDlgOpen = false;
      });
  };
});
