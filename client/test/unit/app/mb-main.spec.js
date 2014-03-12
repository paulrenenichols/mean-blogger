describe('mean-blogger', function() {

    beforeEach(module('mean-blogger'));

    describe('MeanBloggerController', function() {
        it('should add a msg property to $scope', inject(function($controller, $rootScope) {
            var locals = {
                $scope: $rootScope.$new()
            };
            var ctrl = $controller('MeanBloggerController', locals);
            expect(locals.$scope.msg).toBeDefined();
        }));
    });

    describe('true is true', function() {
        it('true should be true', function() {
            expect(true).toBe(true);
        });
    });
});