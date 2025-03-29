import express from "express";

import { protect } from "../middleware/authMiddleware.js";
import { getDatasources } from "../controllers/datasourcesController.js";

const router = express.Router();

router.post("/", protect, getDatasources);

export default router;
