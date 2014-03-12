angular.module('mb.hello-world', ['ui.router'])
    .controller('MBHelloWorldCtrl', function($scope) {
        $scope.msg = "Hello World";
    })
    .controller('MBHelloCtrl', function($scope) {
        var $stateParams = $scope.$stateParams;
        var firstName = $stateParams.firstName ? $stateParams.firstName : '';
        var lastName = $stateParams.lastName ? $stateParams.lastName : '';

        $scope.firstName = firstName;
        $scope.lastName = lastName;
    });
