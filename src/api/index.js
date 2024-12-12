import { GetPosts, CreatePost, GenerateAIImage } from "./api";

// Fetch all posts
const fetchPosts = async () => {
    try {
        const posts = await GetPosts();
        console.log("Fetched posts:", posts);
    } catch (error) {
        console.error("Failed to fetch posts:", error);
    }
};

// Create a new post
const createNewPost = async (postData) => {
    try {
        const newPost = await CreatePost(postData);
        console.log("Created post:", newPost);
    } catch (error) {
        console.error("Failed to create post:", error);
    }
};

// Generate an AI image
const generateImage = async (imageData) => {
    try {
        const aiImage = await GenerateAIImage(imageData);
        console.log("Generated AI Image:", aiImage);
    } catch (error) {
        console.error("Failed to generate AI image:", error);
    }
};
