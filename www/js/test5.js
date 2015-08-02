myApp.controller('test5Ctrl', ['$scope','$cordovaToast',function ($scope,$cordovaToast) {
	$scope.toastMessage = 'top';

    $scope.center = function (message) {
      $cordovaToast.show(message, 'short', 'center')
        .then(function (success) {
        }, function (error) {
          $scope.msg = error.message;
        });
    };

    $scope.top = function (message) {
      $cordovaToast
        .showShortTop(message, 'short', 'top')
        .then(function (success) {
        }, function (error) {
          $scope.msg = error.message;
        });
    };

    $scope.bottom = function (message) {
      $cordovaToast
        .showLongBottom(message, 'short', 'bottom')
        .then(function (success) {
        }, function (error) {
          $scope.msg = error.message;
        });
    }


}]);
