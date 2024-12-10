import { Configuration, OpenAIApi } from "openai";
import * as dotenv from "dotenv";
dotenv.config();

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export const generateImage = async (req, res, next) => {
    try {
        const { prompt } = req.body;

        // Validate the prompt
        if (!prompt) {
            return res.status(400).json({ message: "Prompt is required to generate an image." });
        }

        // Generate image with OpenAI
        const response = await openai.createImage({
            prompt,
            n: 1,
            size: "1024x1024",  // You can adjust this size as per your need
        });

        // Assuming the OpenAI response contains an image URL, extract it
        const generatedImage = response.data.data[0].url;

        return res.status(200).json({ photo: generatedImage });
    } catch (error) {
        console.error("Error generating image:", error);
        const errorMessage = error?.response?.data?.error?.message || error.message || "An unexpected error occurred.";
        return res.status(error?.response?.status || 500).json({ message: errorMessage });
    }
};
