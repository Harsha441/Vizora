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
		res
			.status(201)
			.json({ message: "User registered successfully", status: "success" });
	} catch (error) {
		res.status(200).json({ message: error.message, status: "error" });
	}
};

export const login = async (req, res) => {
	try {
		const token = await loginUser(req.body);
		res.cookie("token", token, COOKIE_OPTIONS);
		res.status(200).json({ message: "Login Successful", status: "success" });
	} catch (error) {
		res.status(200).json({ message: error.message, status: "error" });
	}
};

export const logout = (req, res) => {
	res.clearCookie("token");
	res
		.status(200)
		.json({ message: "Logged out successfully", status: "success" });
};

export const validateToken = (req, res) => {
	return res.status(200).json({ message: "Token is valid", status: "success" });
};
