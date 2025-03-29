import express from "express";

import { protect } from "../middleware/authMiddleware.js";
import { uploadFile, upload } from "../controllers/fileUploadController.js";

const router = express.Router();

router.post("/uploadFile", protect, upload.single("file"), uploadFile);

export default router;
