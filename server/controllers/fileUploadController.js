import multer from "multer";
import { v4 as uuidv4 } from "uuid";
import {
	getUploadPath,
	saveFileToDatabase,
} from "../services/fileUploadService.js";
import path from "path";

// Multer storage configuration

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		try {
			const uploadPath = getUploadPath(req.userId, file.mimetype);
			cb(null, uploadPath);
		} catch (error) {
			cb(error, null);
		}
	},
	filename: (req, file, cb) => {
		const uniqueName = `${uuidv4()}${path.extname(file.originalname)}`;
		cb(null, uniqueName);
	},
});

//Multer file upload middleware
export const upload = multer({
	storage,
});

// Controller function to handle file upload

export const uploadFile = async (req, res) => {
	try {
		if (!req.file)
			return res
				.status(200)
				.json({ message: " No file uploaded", status: "error" });
		const { fileName, fileDescription, fileType } = req.body;

		const savedFile = await saveFileToDatabase(
			req.userId,
			req.file,
			fileName,
			fileDescription,
			fileType
		);
		res.status(200).json({
			message: "File uploaded successfully",
			status: "success",
			savedFile,
		});
	} catch (error) {
		res.status(500).json({ message: error.message, status: "error" });
	}
};
