import axios from "axios";

// Axios instance with base URL
const API = axios.create({
    baseURL: "https://ash-ai.onrender.com/api/",
});

// Function to get posts
export const GetPosts = async () => {
    try {
        const response = await API.get("/post/");
        return response.data;  // Return posts data
    } catch (error) {
        console.error("Error fetching posts:", error);
        throw error;  // Rethrow error for handling by caller
    }
};

// Function to create a post
export const CreatePost = async (data) => {
    try {
        const response = await API.post("/post/", data);
        return response.data;  // Return the newly created post data
    } catch (error) {
        console.error("Error creating post:", error);
        throw error;  // Rethrow error for handling by caller
    }
};

// Function to generate an AI image
export const GenerateAIImage = async (data) => {
    try {
        const response = await API.post("/generateImage/", data);
        return response.data;  // Return generated image data
    } catch (error) {
        console.error("Error generating AI image:", error);
        throw error;  // Rethrow error to be handled by calling function
    }
};
