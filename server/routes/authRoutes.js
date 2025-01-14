import express from "express";
import {
	register,
	login,
	logout,
	validateToken,
} from "../controllers/authController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.post("/validate", protect, validateToken);

export default router;
