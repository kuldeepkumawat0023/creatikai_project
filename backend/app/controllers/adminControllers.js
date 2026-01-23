import Admin from "../module/admin.js";
import cloudinary from "../config/cloudianry.js";
import { genrateToken } from "../config/admin-jwt.js";
import bcrypt from "bcryptjs"
import fs from "fs";
import jwt from "jsonwebtoken";
// ✅ Get all admins
export const getAdmins = async (req, res) => {
  try {
    const admins = await Admin.find();
    res.status(200).json(admins);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ Get admin by ID
export const getAdminById = async (req, res) => {
  const { id } = req.params;
  try {
    const admin = await Admin.findById(id);
    if (!admin) return res.status(404).json({ message: "Admin not found" });
    res.status(200).json(admin);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



// ===========================
// 🔹 Create / Signup Admin
// ===========================
export const adminSignup = async (req, res) => {
  try {
    const { name, email, password, number, address } = req.body;

    // 1️⃣ Validate input
    if (!name || !email || !password || !number || !address) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // 2️⃣ Check duplicate email
    const existing = await Admin.findOne({ email });
    if (existing) {
      return res.status(409).json({
        success: false,
        message: "Admin with this email already exists",
      });
    }

    // 3️⃣ Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 4️⃣ Handle Cloudinary image upload (optional)
    let Image = "";
    if (req.file) {
      const upload = await cloudinary.uploader.upload(req.file.path, {
        folder: "Admin/project_images",
        transformation: [{ width: 1000, crop: "limit" }],
      });
      Image = upload.secure_url;
    }

    // 5️⃣ Create admin
    const newAdmin = await Admin.create({
      name,
      email,
      password: hashedPassword,
      number,
      address,
      Image,
    });

    // 6️⃣ Generate JWT token
    const token = genrateToken(newAdmin._id);

    // 7️⃣ Save token in cookies
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    // 8️⃣ Prepare response
    const adminToReturn = newAdmin.toObject();
    delete adminToReturn.password;

    return res.status(201).json({
      success: true,
      message: "Admin created successfully",
      admin: adminToReturn,
      token,
    });
  } catch (error) {
    console.error("❌ Admin Signup Error:", error.message);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

// ===========================
// 🔹 Admin Login
// ===========================
export const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1️⃣ Validate input
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }

    // 2️⃣ Find admin by email
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(404).json({
        success: false,
        message: "Admin not found",
      });
    }

    // 3️⃣ Compare password
    const isPasswordCorrect = await bcrypt.compare(password, admin.password);
    if (!isPasswordCorrect) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    // 4️⃣ Generate token
    const token = genrateToken(admin._id);

    // 5️⃣ Store token in cookies
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    // 6️⃣ Prepare response
    const adminData = admin.toObject();
    delete adminData.password;

    return res.status(200).json({
      success: true,
      message: "Admin login successful",
      admin: adminData,
      token,
    });
  } catch (error) {
    console.error("❌ Admin Login Error:", error.message);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

// ===========================
// 🔹 Check Authentication
// ===========================
export const checkAuth = async (req, res) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "No token found, please log in",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const admin = await Admin.findById(decoded.adminId).select("-password");

    if (!admin) {
      return res.status(404).json({
        success: false,
        message: "Admin not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Admin authenticated",
      admin,
    });
  } catch (error) {
    console.error("❌ CheckAuth Error:", error.message);

    if (error.name === "TokenExpiredError") {
      return res.status(401).json({
        success: false,
        message: "Token expired, please log in again",
      });
    }

    return res.status(401).json({
      success: false,
      message: "Invalid or expired token",
    });
  }
};

// ===========================
// 🔹 Admin Logout
// ===========================
export const adminLogout = async (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: true,
      sameSite: "none",
    });

    return res.status(200).json({
      success: true,
      message: "Admin logged out successfully",
    });
  } catch (error) {
    console.error("❌ Logout Error:", error.message);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};



export const updateAdmin = async (req, res) => {
  try {
    const { name, email, password, number, address, Image } = req.body;
    const adminId = req.user._id; // from protectRoute
    let updatedAdmin;

    // 1️⃣ Hash password if provided
    let hashedPassword;
    if (password && password.trim() !== "") {
      const salt = await bcrypt.genSalt(10);
      hashedPassword = await bcrypt.hash(password, salt);
    }

    // 2️⃣ If no image is provided → update text fields only
    if (!Image) {
      updatedAdmin = await Admin.findByIdAndUpdate(
        adminId,
        {
          name,
          email,
          number,
          address,
          ...(hashedPassword && { password: hashedPassword }), // only update if provided
        },
        { new: true }
      );
    }

    // 3️⃣ If new image provided → upload to Cloudinary and update
    else {
      const upload = await cloudinary.uploader.upload(Image, {
        folder: "Admin/project_images",
        transformation: [{ width: 1000, crop: "limit" }],
      });

      updatedAdmin = await Admin.findByIdAndUpdate(
        adminId,
        {
          name,
          email,
          number,
          address,
          Image: upload.secure_url,
          ...(hashedPassword && { password: hashedPassword }),
        },
        { new: true }
      );
    }

    // 4️⃣ Remove password from response
    const adminToReturn = updatedAdmin.toObject();
    delete adminToReturn.password;

    res.json({ success: true, admin: adminToReturn });
  } catch (error) {
    console.log("❌ Error updating admin:", error.message);
    res.json({ success: false, message: error.message });
  }
};


// ✅ Delete admin
export const deleteAdmin = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedAdmin = await Admin.findByIdAndDelete(id);
    if (!deletedAdmin)
      return res.status(404).json({ message: "Admin not found" });

    res.status(200).json({ message: "Admin deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};





