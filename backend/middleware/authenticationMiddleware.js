const asyncHandler = require("./asyncHandler");
const jwt = require("jsonwebtoken");

// Middleware to authenticate a user
const authenticate = asyncHandler(async (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({ message: "Authentication required" }); // Changed to 401 Unauthorized
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify the token
        req.user = decoded; // Store decoded token info in req.user
        next(); // Proceed to next middleware
    } catch (error) {
        if (error.name === "TokenExpiredError") {
            return res.status(401).json({ message: "Token expired" }); // Handle expired token
        }
        return res.status(401).json({ message: "Invalid token" });
    }
});

// Middleware to authorize an admin user
const authorizedAdmin = (req, res, next) => {
    if (req.user && req.user.isAdmin) {
        next(); // Proceed if the user is admin
    } else {
        return res.status(403).json({ message: "Access denied: Admins only" }); // Return 403 Forbidden
    }
};

module.exports = { authenticate, authorizedAdmin };
