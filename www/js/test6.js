myApp.controller('test6Ctrl', ['$scope','$ionicPlatform', '$cordovaBadge',function ($scope,$ionicPlatform, $cordovaBadge) {

$ionicPlatform.ready(function() {
        $cordovaBadge.promptForPermission();
 
        $scope.setBadge = function(value) {
            $cordovaBadge.hasPermission().then(function(result) {
                $cordovaBadge.set(value);
            }, function(error) {
                alert(error);
            });
        }
    });

}]);
