const jwt = require("jsonwebtoken");

// Verify Token Middleware
exports.verifyToken = async (req, res, next) => {
  try {
    let token = req.headers.authorization;

    // Check if token exists
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Access Denied. No Token Provided",
      });
    }

    // Remove "Bearer "
    if (token.startsWith("Bearer ")) {
      token = token.split(" ")[1];
    }

    // Verify JWT
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Save decoded user info
    req.user = decoded;

    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid or Expired Token",
    });
  }
};


// Admin Only
exports.isAdmin = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({
      success: false,
      message: "Access Denied. Admin Only",
    });
  }

  next();
};

// Teacher Only
exports.isTeacher = (req, res, next) => {
  if (req.user.role !== "teacher") {
    return res.status(403).json({
      success: false,
      message: "Access Denied. Teacher Only",
    });
  }

  next();
};

// Student Only
exports.isStudent = (req, res, next) => {
  if (req.user.role !== "student") {
    return res.status(403).json({
      success: false,
      message: "Access Denied. Student Only",
    });
  }

  next();
};