import path from "path";
import fs from "fs";
import File from "../models/FileModel.js";

const FILE_TYPES = {
	"text/csv": "CSV",
	"application/json": "JSON",
	"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": "XLSX",
};

// Function to create user/type directory and return file path

const getUploadPath = (userId, mimeType) => {
	const fileType = FILE_TYPES[mimeType];
	console.log({ fileType, mimeType });
	if (!fileType) throw new Error("Invalid file type");
	const uploadPath = path.join("uploads", userId, fileType);
	fs.mkdirSync(uploadPath, { recursive: true });

	return uploadPath;
};

// Functionto handle file upload logic

const saveFileToDatabase = async (
	userId,
	file,
	fileName,
	fileDescription,
	filetype
) => {
	const fileType = FILE_TYPES[file.mimetype];

	const newFile = new File({
		userId,
		filename: file.filename,
		originalName: file.originalname,
		path: getUploadPath(userId, file.mimetype),
		size: file.size,
		type: fileType,
		description: fileDescription,
		fileName: fileName,
		fileType: filetype,
		mimeType: file.mimetype,
	});

	return await newFile.save();
};

export { getUploadPath, saveFileToDatabase };
