myApp.controller('test1Ctrl', ['$scope','$cordovaDevice',function ($scope,$cordovaDevice) {


		document.addEventListener("deviceready", function() {
		    angular.element(document).ready(function () {
		    	$scope.model = $cordovaDevice.getModel();
	        	$scope.platform = $cordovaDevice.getPlatform();
	        	$scope.version = $cordovaDevice.getVersion();
	        	$scope.cordova = $cordovaDevice.getCordova();
	            $scope.UUID = $cordovaDevice.getUUID();
	            $scope.$apply();
		    });
		}, false);

	

}]);
