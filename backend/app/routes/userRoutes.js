
import express from 'express';
import upload from "../middleware/multer.js";
import protectRoute from '../middleware/auth.js'

// ✅ Controllers
import { 
  getUsers, 
  getUserById, 
  createUser, 
  updateUser, 
  deleteUser 
} from '../controllers/userControllers.js';

import { 
 adminSignup,
  adminLogin,
  checkAuth,
  adminLogout,
  getAdmins, 
  getAdminById, 
  updateAdmin, 
  deleteAdmin 
} from "../controllers/adminControllers.js";


const router = express.Router();

/* -------------------- USER ROUTES -------------------- */

// Get all users
router.get('/users', getUsers);

// Get user by ID
router.get('/users/:id', getUserById);

// Create user
router.post('/users', createUser);

// Update user
router.put('/users/:id', updateUser);

// Delete user
router.delete('/users/:id', deleteUser);


/* -------------------- ADMIN ROUTES -------------------- */

// Get all admins
router.get('/admins', getAdmins);

// Get admin by ID
router.get('/admins/:id', getAdminById);

// Create admin (with image upload)
router.post('/signup', upload.single("Image"), adminSignup);

router.post("/login", adminLogin);

router.get("/check-auth", protectRoute, checkAuth);

router.post("/logout", protectRoute, adminLogout);

// Update admin (protected)
router.put("/admins/:id", protectRoute, upload.single("Image"), updateAdmin);

// Delete admin
router.delete('/admins/:id', deleteAdmin);

router.get('/admin/profile', protectRoute, async (req, res) => {
  res.json({
    success: true,
    admin: req.admin,
  });
});


export default router;


