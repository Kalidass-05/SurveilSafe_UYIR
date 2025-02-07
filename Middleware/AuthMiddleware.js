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
        return res.status(403).redirect(`/error.html?message=Invalid or expired token.`)
    }
};

const authenticateEmergencyUser = (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).redirect(`/error.html?message=Access Denied. No token provided.`);
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if(decoded.userType != 'Emergency'){
            return res.status(403).redirect(`/error.html?message=access denied for this user type`)
        }
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(403).redirect(`/error.html?message=Invalid or expired token.`)
    }
};

const authenticateHazardsUser = (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).redirect(`/error.html?message=Access Denied. No token provided.`);
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if(decoded.userType != 'Hazards'){
            return res.status(403).redirect(`/error.html?message=access denied for this user type`)
        }
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(403).redirect(`/error.html?message=Invalid or expired token.`)
    }
};

const checkForTocken = (req) => {
    const token = req.cookies.token;
    if (!token) {
        return "noToken";
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        return decoded.userType;
    } catch (error) {
        return 'noToken';
    }
} 

module.exports = {authenticateUser, authenticateEmergencyUser, authenticateHazardsUser, checkForTocken}
