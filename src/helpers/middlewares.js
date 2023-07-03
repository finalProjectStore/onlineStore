const jwt = require('jsonwebtoken');

function tokenTester(testerFunction) {
    return function(req, res, next) {
        const token = req.cookies?.jwtToken;
        if (!token) {
            return res.redirect('/login');
        }

        jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
            if (err || !testerFunction(decodedToken)) {
                return res.redirect('/login');
            }
            next();
        });
    }
}

const verifyToken = (req, res, next) => {
    const tester = tokenTester(decodedToken => true);
    return tester(req, res, next);
};

const verifyAdmin = (req, res, next) => {
    const tester = tokenTester(decodedToken => {
        return decodedToken['isAdmin'];
    });
    return tester(req, res, next);
};

module.exports = { verifyToken, verifyAdmin };