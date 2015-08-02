myApp.controller('test4Ctrl', ['$scope','$cordovaDialogs',function ($scope,$cordovaDialogs) {

  $scope.showdilogs1 = function () {
	  $cordovaDialogs.alert('message', 'OK tip', 'OK')
	    .then(function() {
	      // callback success
	    });
  };

   $scope.showdilogs2 = function () {
	  $cordovaDialogs.confirm('message', 'OK or Cancel tip', ['Cancel','OK'])
	    .then(function(buttonIndex) {
	      // no button = 0, 'OK' = 1, 'Cancel' = 2
	      $scope.d0 = buttonIndex;
	      var btnIndex = buttonIndex;
	      if(btnIndex == 2){
	      $scope.d2 = 'OK';	
	      }else if(btnIndex == 1)
	      {
	      $scope.d2 = 'Cancel';
	      }
	    });
	  // $cordovaDialogs.beep(3);
  };

   $scope.showdilogs3 = function () {
	  $cordovaDialogs.prompt('msg', 'input tip', ['Cancel','OK'], 'Hello！！')
	    .then(function(result) {
	      var input = result.input1;
	      // no button = 0, 'OK' = 1, 'Cancel' = 2
	      var btnIndex = result.buttonIndex;
	      
	      if(btnIndex == 2){
	      	// alert(input);
	      	$scope.d3 = input;
	      }else if(btnIndex == 1)
	      {
	      	$scope.d3 = 'Cancel';
	      	// alert(input);
	      
	      }
	    });

	  // beep 3 times
	  // $cordovaDialogs.beep(3);
  };
}]);
