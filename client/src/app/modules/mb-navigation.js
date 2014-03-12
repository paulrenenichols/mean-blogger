angular.module('mb.navigation', ['ui.router', 'mb.hello-world'])
    .provider('navigationService', function($stateProvider) {
        return {
            $get: function() {}
        };
    });