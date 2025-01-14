import jwt from "jsonwebtoken";

export const protect = (req, res, next) => {
	const token = req.cookies.token;

	if (!token) {
		return res
			.status(401)
			.json({ message: "No token provided. Unauthorized", status: "error" });
	}
	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		req.userId = decoded.id;
		next();
	} catch (error) {
		res
			.status(401)
			.json({ message: "Invalid or expired token", status: "error" });
	}
};
