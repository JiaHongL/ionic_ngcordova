myApp.controller('test3Ctrl',  ['$scope',function ($scope) {

	onDeviceReady();	

    function onDeviceReady() {
        window.addEventListener("batterystatus", onBatteryStatus, false);
    }
    //檢查硬體電池剩餘多少百分比，利用alert顯示出來
    function onBatteryStatus(info) {
        // alert("Level: " + info.level + " isPlugged: " + info.isPlugged);
        if(info.isPlugged==true){
        	$scope.batteryLevel = info.level;
	        $scope.isPlugged = '正在使用中';
	        $scope.$apply();
        }
        else if(info.isPlugged==false)
        {
        	$scope.batteryLevel = info.level;
	        $scope.isPlugged = '未使用';
	        $scope.$apply();
        }
        
    }



}]);
