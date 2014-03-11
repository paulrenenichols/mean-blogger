
function helloWorld(req, res, next) {
    req.helloWorld = "Hello World";
    next();
}

module.exports.helloWorld = helloWorld;