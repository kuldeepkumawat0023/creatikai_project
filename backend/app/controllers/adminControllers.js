import mongoose from "mongoose";
import Admin from "../module/admin.js";
import cloudinary from "../config/cloudianry.js";
import { genrateToken } from "../config/admin-jwt.js";
import bcrypt from "bcryptjs"
import fs from "fs";
import jwt from "jsonwebtoken";
// ✅ Get all admins
export const getAdmins = async (req, res) => {
  try {
    const admins = await Admin.find().select("-password");
    res.status(200).json(admins);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ Get admin by ID
export const getAdminById = async (req, res) => {
  const { id } = req.params;
  const cleanId = id?.startsWith(":") ? id.slice(1) : id;

  if (!mongoose.Types.ObjectId.isValid(cleanId)) {
    return res.status(400).json({ message: "Invalid Admin ID format" });
  }

  try {
    const admin = await Admin.findById(cleanId).select("-password");
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
    const { name, email, password, number, address } = req.body || {};

    // 1️⃣ Validate input (Image and Password are optional)
    if (!name || !email || !number || !address) {
      return res.status(400).json({
        success: false,
        message: "Name, email, number, and address are required",
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

    // 3️⃣ Hash password if provided (optional)
    let hashedPassword = "";
    if (password && typeof password === "string" && password.trim() !== "") {
      hashedPassword = await bcrypt.hash(password, 10);
    }

    // 4️⃣ Handle Cloudinary image upload (optional)
    let Image = req.body.Image || "";
    if (req.file) {
      try {
        const upload = await cloudinary.uploader.upload(req.file.path, {
          folder: "Admin/project_images",
          transformation: [{ width: 1000, crop: "limit" }],
        });
        Image = upload.secure_url;
      } catch (uploadErr) {
        console.error("Cloudinary upload failed:", uploadErr.message);
      } finally {
        if (req.file.path && fs.existsSync(req.file.path)) {
          fs.unlinkSync(req.file.path);
        }
      }
    } else if (Image && Image.startsWith("data:image")) {
      try {
        const upload = await cloudinary.uploader.upload(Image, {
          folder: "Admin/project_images",
          transformation: [{ width: 1000, crop: "limit" }],
        });
        Image = upload.secure_url;
      } catch (uploadErr) {
        console.error("Cloudinary upload failed:", uploadErr.message);
      }
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
    const { email, password } = req.body || {};

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
    const { name, email, password, number, address, Image } = req.body || {};
    const rawId = req.params.id || req.user?._id || req.admin?._id;
    const adminId = (typeof rawId === "string" && rawId.startsWith(":")) ? rawId.slice(1) : rawId;

    if (!adminId || !mongoose.Types.ObjectId.isValid(adminId)) {
      return res.status(400).json({ success: false, message: "Invalid or missing Admin ID" });
    }

    // Validate required fields: name, email, number, address
    if (!name || !email || !number || !address) {
      return res.status(400).json({
        success: false,
        message: "Name, email, number, and address are required",
      });
    }

    // 1️⃣ Hash password if provided (optional)
    let hashedPassword;
    if (password && typeof password === "string" && password.trim() !== "") {
      const salt = await bcrypt.genSalt(10);
      hashedPassword = await bcrypt.hash(password, salt);
    }

    // 2️⃣ Handle optional image upload (file or base64/url)
    let imageUrl = Image;
    if (req.file) {
      try {
        const upload = await cloudinary.uploader.upload(req.file.path, {
          folder: "Admin/project_images",
          transformation: [{ width: 1000, crop: "limit" }],
        });
        imageUrl = upload.secure_url;
      } catch (uploadErr) {
        console.error("Cloudinary upload failed:", uploadErr.message);
      } finally {
        if (req.file.path && fs.existsSync(req.file.path)) {
          fs.unlinkSync(req.file.path);
        }
      }
    } else if (imageUrl && typeof imageUrl === "string" && imageUrl.startsWith("data:image")) {
      try {
        const upload = await cloudinary.uploader.upload(imageUrl, {
          folder: "Admin/project_images",
          transformation: [{ width: 1000, crop: "limit" }],
        });
        imageUrl = upload.secure_url;
      } catch (uploadErr) {
        console.error("Cloudinary upload failed:", uploadErr.message);
      }
    }

    // 3️⃣ Prepare update fields
    const updateData = {};
    if (name) updateData.name = name;
    if (email) updateData.email = email;
    if (number) updateData.number = number;
    if (address !== undefined) updateData.address = address;
    if (hashedPassword) updateData.password = hashedPassword;
    if (imageUrl !== undefined) updateData.Image = imageUrl;

    const updatedAdmin = await Admin.findByIdAndUpdate(
      adminId,
      updateData,
      { new: true }
    );

    if (!updatedAdmin) {
      return res.status(404).json({ success: false, message: "Admin not found" });
    }

    // 4️⃣ Remove password from response
    const adminToReturn = updatedAdmin.toObject();
    delete adminToReturn.password;

    res.json({ success: true, admin: adminToReturn });
  } catch (error) {
    console.log("❌ Error updating admin:", error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};


// ✅ Delete admin
export const deleteAdmin = async (req, res) => {
  const { id } = req.params;
  const cleanId = id?.startsWith(":") ? id.slice(1) : id;

  if (!mongoose.Types.ObjectId.isValid(cleanId)) {
    return res.status(400).json({ message: "Invalid Admin ID format" });
  }

  try {
    const deletedAdmin = await Admin.findByIdAndDelete(cleanId);
    if (!deletedAdmin)
      return res.status(404).json({ message: "Admin not found" });

    res.status(200).json({ message: "Admin deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};





