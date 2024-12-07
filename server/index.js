import cors from "cors"
import express from "express"
import mongoose from "mongoose"
import * as dotenv from "dotenv"

dotenv.config;

const app = express();
app.use(cors());
app.use(express.json({limit: "50mb"}));
app.use(express.urlencoded({extended: true}));