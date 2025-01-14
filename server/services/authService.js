import jwt from "jsonwebtoken";
import User from "../models/User.js";
import bcrypt from "bcrypt";

export const generateToken = (userId) => {
	return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: "1h" });
};

export const registerUser = async (userDetails) => {
	const { firstName, lastName, email, password } = userDetails;

	const existingUser = await User.findOne({ email });
	if (existingUser) {
		throw new Error("User already exists");
	}

	const newUser = new User({ firstName, lastName, email, password });
	await newUser.save();

	return generateToken(newUser._id);
};

export const loginUser = async (userDetails) => {
	const { email, password } = userDetails;

	const user = await User.findOne({ email });
	if (!user) {
		throw new Error("User not found");
	}

	const isPassswordMatch = await bcrypt.compare(password, user.password);
	if (!isPassswordMatch) {
		throw new Error("Invalid password");
	}

	return generateToken(user._id);
};
