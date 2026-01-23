import Admin from '../module/admin.js';
import jwt from 'jsonwebtoken'



// Custom Error Helper (optional)
class ApiError extends Error {
  constructor(statusCode, message) {
    super(message);
    this.statusCode = statusCode;
  }
}

export const protectRoute = async (req, res, next) => {
  try {
    // ✅ Get token from cookie or header
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

    if (!token) {
      throw new ApiError(401, 'Access denied. No token provided.');
    }

    // ✅ Verify JWT
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // ✅ Use decoded.adminId (not userId)
    const admin = await Admin.findById(decoded.adminId).select('-password');
    if (!admin) {
      throw new ApiError(404, 'Admin not found.');
    }

    if (admin.status === 'inactive') {
      throw new ApiError(403, 'Account has been deactivated.');
    }

    req.admin = admin;
    next();
  } catch (error) {
    console.log('❌ ProtectRoute Error:', error.message);

    if (error instanceof ApiError) {
      res.status(error.statusCode).json({ success: false, message: error.message });
    } else if (error.name === 'JsonWebTokenError') {
      res.status(401).json({ success: false, message: 'Invalid token' });
    } else if (error.name === 'TokenExpiredError') {
      res.status(401).json({ success: false, message: 'Token expired' });
    } else {
      res.status(500).json({ success: false, message: 'Server error' });
    }
  }
};

export default protectRoute;




// export const protectRoute = async (req, res, next) => {
//   try {
//     const token = req.headers.token || req.cookies.token;

//     if (!token) {
//       throw new ApiError(401, "Access denied. No token provided");
//     }

//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     const admin = await Admin.findById(decoded.userId).select("-password");

//     if (!admin) {
//       throw new ApiError(404, "Admin not found");
//     }

//     if (admin.status === "inactive") {
//       throw new ApiError(403, "Account has been deactivated");
//     }

//     req.admin = admin;
//     next();
//   } catch (error) {
//     console.log(error.message);
//     if (error instanceof ApiError) {
//       res
//         .status(error.statusCode)
//         .json({ success: false, message: error.message });
//     } else if (error.name === "JsonWebTokenError") {
//       res.status(401).json({ success: false, message: "Invalid token" });
//     } else if (error.name === "TokenExpiredError") {
//       res.status(401).json({ success: false, message: "Token expired" });
//     } else {
//       res.status(500).json({ success: false, message: error.message });
//     }
//   }
// };

// export default protectRoute; 