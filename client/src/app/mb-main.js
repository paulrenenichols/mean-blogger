angular.module('mb', [
    'mb.navigation',
    'mb.hello-world',
    'ui.router'
])
    .run(['$rootScope', '$state', '$stateParams',
        function($rootScope, $state, $stateParams) {
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
        }])
    .config(function($stateProvider) {
        $stateProvider.state("index", {
            url: '/',
            template: '<div class="row"><h1>This is the index route.</h1></div>' +
                '<div class="row"><h3>{{$state.current.name}}</h3></div>' +
                '<div class="row"><h3>{{$stateParams}}</h3></div>'
        });
        $stateProvider.state("helloWorld", {
            url: '/helloWorld',
            template: '<div class="row"><h1>{{msg}}</h1></div>' +
                '<div class="row"><h3>{{$state.current.name}}</h3></div>' +
                '<div class="row"><h3>{{$stateParams}}</h3></div>',
            controller: 'MBHelloWorldCtrl'
        });
        $stateProvider.state("hello", {
            url: '/hello',
            template: '<div class="row"><h1><em>Hello</em> <span ui-view></span></h1></div>' +
                '<div class="row"><h3>{{$state.current.name}}</h3></div>' +
                '<div class="row"><h3>{{$stateParams}}</h3></div>',
            controller: 'MBHelloCtrl'
        });
        $stateProvider.state("hello.firstName", {
            url: '/:firstName',
            template: '<strong>{{$stateParams.firstName}}</strong> <span ui-view></span>'
        });
        $stateProvider.state("hello.firstName.lastName", {
            url: '/:lastName',
            template: '<strong>{{$stateParams.lastName}}</strong>'
        });

    })
    .controller('MBMainCtrl', function($scope, $state) {
        $state.go('index');
    });


