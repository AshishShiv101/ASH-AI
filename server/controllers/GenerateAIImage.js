import { createError} from "../error";
import { Configuration, OpenAIApi} from "openai";
import * as dotenv from "dotenv";

dotenv.config();

const configuration = new Configuration({
    apiKey: process.env.OPENAIR_API_KEY,
});

const openai = new OpenAIApi(configuration);

export const generatePrompt = async (req,res,next) => {
    try{
        const {prompt} =req.body;
    } catch(error){
        
    }
}