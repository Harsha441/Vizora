import mongoose from "mongoose";

const fileSchema = new mongoose.Schema(
	{
		userId: { type: String, required: true },
		filename: { type: String, required: true },
		fileName: { type: String, required: true },
		originalName: { type: String, required: true },
		path: { type: String, required: true },
		size: { type: Number, required: true },
		type: { type: String, required: true },
		description: { type: String, required: true },
		mimeType: { type: String, required: true },
	},
	{ timestamps: true }
);

const File = mongoose.model("File", fileSchema);

export default File;
