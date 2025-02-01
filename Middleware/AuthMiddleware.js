const jwt = require('jsonwebtoken');

const authenticateUser = (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).redirect(`/error.html?message=Access Denied. No token provided.`);
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(403).redirect(`/error.html?message=Invalid or expired token.`)
    }
};

module.exports = {authenticateUser}
