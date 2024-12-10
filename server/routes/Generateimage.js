import express from "express";
import { generateImage } from "../controllers/GenerateAIImage.js";

const router = express.Router();

// Use POST instead of GET for generating an image
router.post("/", generateImage);

export default router;
