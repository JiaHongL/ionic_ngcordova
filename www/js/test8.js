myApp.controller('test8Ctrl', ['$scope','$rootScope','$cordovaInAppBrowser',function ($scope,$rootScope, $cordovaInAppBrowser) {
	$scope.openBrowser1 = function () {
            document.addEventListener('deviceready', function () {
                var options = {
                    location: "yes",
                    clearcache: 'no',
                    toolbar: 'yes'
                };
                $cordovaInAppBrowser.open('http://jiahongl.github.io/jhlblogger/', '_self', options).then(function () {
                 }, function (error) {
                    console.log("错误: " + error);
                });
            }, false);
        };
    $scope.openBrowser2 = function () {
            document.addEventListener('deviceready', function () {
                var options = {
                    location: "no",
                    clearcache: 'no',
                    toolbar: 'no'
                };
                $cordovaInAppBrowser.open('http://jiahongl.github.io/jhlblogger/', '_blank', options).then(function () {
                 }, function (error) {
                    console.log("错误: " + error);
                });
            }, false);
        };
    $scope.openBrowser3 = function () {
            document.addEventListener('deviceready', function () {
                var options = {
                    location: "no",
                    clearcache: 'no',
                    toolbar: 'no'
                };
                $cordovaInAppBrowser.open('http://jiahongl.github.io/jhlblogger/', '_system', options).then(function () {
                 }, function (error) {
                    console.log("错误: " + error);
                });
            }, false);
        };            
        document.addEventListener('deviceready', function () {//open 方法执行后 添加监听事件
            $rootScope.$on('$cordovaInAppBrowser:loadstart', function (e, event) {
                // alert("打开瀏覽器");
            });
            $rootScope.$on("$cordovaInAppBrowser:exit", function (event, result) {
                // alert("退出瀏覽器");
                console.log(JSON.stringify(result));
            });
            $rootScope.$on("$cordovaInAppBrowser:loadstop", function (event, result) {
                // alert("载入完成");
                console.log(JSON.stringify(result));
            })
        }, false);
}]);
