import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:8000/api",
});

// Function to get posts
export const GetPosts = async () => await API.get("/post/");


// Function to create a post
export const CreatePost = async (data) => await API.post("/post/", data);


// Function to generate an AI image
export const GenerateAIImage = async (data) => {
    try {
        const response = await API.post("/generateImage/", data);
        return response.data;  // Return data from the response
    } catch (error) {
        console.error("Error generating AI image:", error);
        throw error;  // Rethrow error to be handled by calling function
    }
};
