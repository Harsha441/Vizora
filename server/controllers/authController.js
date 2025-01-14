import { registerUser, loginUser } from "../services/authService.js";

const COOKIE_OPTIONS = {
	secure: process.env.NODE_ENV === "production",
	httpOnly: false, // Set to false to access via JavaScript
	sameSite: "lax", // Adjust if you're making cross-origin requests
	maxAge: 60 * 60 * 1000,
};

export const register = async (req, res) => {
	try {
		const token = await registerUser(req.body);
		res.cookie("token", token, COOKIE_OPTIONS);
		res.status(201).json({ message: "User registered successfully" });
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

export const login = async (req, res) => {
	try {
		const token = await loginUser(req.body);
		res.cookie("token", token, COOKIE_OPTIONS);
		res.status(200).json({ message: "Login Successful" });
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

export const logout = (req, res) => {
	res.clearCookie("token");
	res.status(200).json({ message: "Logged out successfully" });
};
