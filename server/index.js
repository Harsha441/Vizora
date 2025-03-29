import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";
import datasourcesRoutes from "./routes/datasourceRoutes.js";

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(
	cors({
		origin: "http://localhost:5173", // Frontend origin
		credentials: true, // Allow cookies to be sent and received
		methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
	})
);
app.use(
	helmet({
		contentSecurityPolicy: false, // Temporarily disable if needed for debugging
	})
);
app.use("/uploads", express.static("uploads"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/uploadFile", uploadRoutes);
app.use("/api/getDatasources", datasourcesRoutes);
