var myApp = angular.module('myApp', ['ionic','ngCordova']);

myApp.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
});

myApp.config(function($stateProvider, $urlRouterProvider) {
  
  $stateProvider
  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'menuCtrl'
  })

  .state('app.test1', {
    url: "/test1",
    views: {
      'menuContent': {
        templateUrl: "templates/test1.html",
        controller:'test1Ctrl'
      }
    }
  })
  .state('app.test2', {
    url: "/test2",
    views: {
      'menuContent': {
        templateUrl: "templates/test2.html",
        controller: 'test2Ctrl'
      }
    }
  })
  .state('app.test3', {
      url: "/test3",
      views: {
        'menuContent': {
          templateUrl: "templates/test3.html",
          controller: 'test3Ctrl'
        }
      }
    })  
  .state('app.test4', {
      url: "/test4",
      views: {
        'menuContent': {
          templateUrl: "templates/test4.html",
          controller: 'test4Ctrl'
        }
      }
    })  
  .state('app.test5', {
      url: "/test5",
      views: {
        'menuContent': {
          templateUrl: "templates/test5.html",
          controller: 'test5Ctrl'
        }
      }
    })
  .state('app.test6', {
      url: "/test6",
      views: {
        'menuContent': {
          templateUrl: "templates/test6.html",
          controller: 'test6Ctrl'
        }
      }
    })
  .state('app.test7', {
      url: "/test7",
      views: {
        'menuContent': {
          templateUrl: "templates/test7.html",
          controller: 'test7Ctrl'
        }
      }
    }) 
  .state('app.test8', {
      url: "/test8",
      views: {
        'menuContent': {
          templateUrl: "templates/test8.html",
          controller: 'test8Ctrl'
        }
      }
    });
  
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/test1');
});




