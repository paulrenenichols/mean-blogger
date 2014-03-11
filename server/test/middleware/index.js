var middleware = require('../../middleware');
var should = require('should');

describe('middleware', function() {

    var req = {};
    var res = {};
    function next() {}

    beforeEach(function(done) {
        req = {};
        res = {};
        done();
    });

    describe('#helloWorld()', function() {
        it("it should set a 'helloWorld property on req", function() {
            middleware.helloWorld(req, res, next);
            req.should.have.property('helloWorld');
        });
    });
});