describe('mb hello world module', function() {

    beforeEach(module('mb-hello-world'));

    describe('MBHelloWorldCtrl', function() {
        it('should add a msg property to $scope', inject(function($controller, $rootScope) {
            var locals = {
                $scope: $rootScope.$new()
            };
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

});