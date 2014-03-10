angular.module('meanBlogger', [
  'ngRoute'
])
    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
      $locationProvider.html5Mode(true);
      $routeProvider.otherwise({redirectTo:'/'});
    }])
    .controller('MeanBloggerController', function($scope) {
        $scope.msg = "Hello World, Dan";
    });


