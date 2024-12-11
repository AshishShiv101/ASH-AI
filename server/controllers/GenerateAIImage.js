import { Configuration, OpenAIApi } from "openai";
import * as dotenv from "dotenv";
import axios from "axios";
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

        const response = await axios.get(`https://image.pollinations.ai/prompt/${prompt}`, {
            responseType: 'arraybuffer', // Important for binary image data
        });

        const base64Image = Buffer.from(response.data, 'binary').toString('base64');
        const imageBase64Url = `data:image/jpeg;base64,${base64Image}`;

        return res.status(200).json({ photo: imageBase64Url });


    } catch (error) {
        console.error("Error generating image:", error);
        const errorMessage = error?.response?.data?.error?.message || error.message || "An unexpected error occurred.";
        return res.status(error?.response?.status || 500).json({ message: errorMessage });
    }
};
