describe('mb hello world module', function() {
    var $scope;
    var locals;

    beforeEach(module('mb.hello-world'));
    beforeEach(inject(function($rootScope) {
        $scope = $rootScope.$new();
        $scope.$stateParams = {};
        locals = {
            $scope: $scope
        };
    }));

    describe('MBHelloWorldCtrl', function() {
        it('should add a msg property to $scope', inject(function($controller, $rootScope) {
            $controller('MBHelloWorldCtrl', locals);
            expect(locals.$scope.msg).toBeDefined();
        }));
        it('should set $scope.msg to "Hello World"', inject(function($controller, $rootScope) {
            var locals = {
                $scope: $rootScope.$new()
            };
            $controller('MBHelloWorldCtrl', locals);
            expect(locals.$scope.msg).toBe("Hello World");
        }));
    });

    describe('MBHelloCtrl', function() {
        it('should receive a $scope parameter with a $stateParams property', inject(function($controller, $rootScope) {
            $controller('MBHelloCtrl', locals);
            expect(locals.$scope.firstName).toBeDefined();
        }));
        it('should create $scope.firstName property when $stateParams is empty', inject(function($controller, $rootScope) {
            $controller('MBHelloCtrl', locals);
            expect(locals.$scope.firstName).toBeDefined();
        }));
        it('should create $scope.lastName property when $stateParams is empty', inject(function($controller, $rootScope) {
            $controller('MBHelloCtrl', locals);
            expect(locals.$scope.lastName).toBeDefined();
        }));
    });

});