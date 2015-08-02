myApp.controller('test7Ctrl', ['$scope','$cordovaSpinnerDialog',function ($scope,$cordovaSpinnerDialog) {
	$scope.showSpinnerDialog = function () {
		$cordovaSpinnerDialog.show("","Wait...", false);
		setTimeout(setbgColor,3000);
	};
	function setbgColor()
	{
	 $cordovaSpinnerDialog.hide();
	};	
}]);
