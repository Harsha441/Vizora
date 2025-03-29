import File from "../models/FileModel.js";
// Controller function to get datasources of a user
export const getDatasources = async (req, res) => {
	try {
		const userId = req.userId;

		const datasources = await File.find({ userId });
		console.log(datasources);

		return res.status(200).json({
			message: "Datasources retrieved successfully",
			status: "success",
			datasources,
		});
	} catch (error) {
		return res.status(500).json({ message: error.message, status: "error" });
	}
};
