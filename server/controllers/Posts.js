import Post from "../models/Posts.js";
import * as dotenv from "dotenv";
import { createError } from "../error.js";
import { v2 as cloudinary } from "cloudinary";

// Load environment variables
dotenv.config();

// Configure Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Fetch all posts
export const getAllPosts = async (req, res, next) => {
    try {
        const posts = await Post.find({});
        return res.status(200).json({ success: true, data: posts });
    } catch (error) {
        console.error("Error fetching posts:", error);
        next(createError(error.status, error?.response?.data?.error?.message || error.message));
    }
};

// Create a new post
export const createPost = async (req, res, next) => {
    try {
        const { name, prompt, photo } = req.body;

        // Validate input
        if (!name || !prompt || !photo) {
            return res.status(400).json({ message: "Name, prompt, and photo are required." });
        }

        // Upload photo to Cloudinary
        const photoUrl = await cloudinary.uploader.upload(photo);

        // Create a new post in the database
        const newPost = await Post.create({
            name,
            prompt,
            photo: photoUrl?.secure_url,
        });

        return res.status(201).json({ success: true, data: newPost });
    } catch (error) {
        console.error("Error creating post:", error);
        next(createError(error.status, error?.response?.data?.error?.message || error.message));
    }
};
