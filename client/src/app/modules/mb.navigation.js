angular.module('mb.navigation', ['ui.router', 'mb.helloWorld'])
    .provider('navigationService', function($stateProvider) {
        return {
            $get: function() {}
        };
    });