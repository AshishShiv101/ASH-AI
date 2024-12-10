import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import PostRouter from "./routes/Post.js";
import GenerateImageRouter from "./routes/Generateimage.js";
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));

// Error-handling middleware
app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Something went wrong";
    return res.status(status).json({
        success: false,
        status,
        message,
    });
});

// Routes
app.use("/api/post", PostRouter);
app.use("/api/generateImage", GenerateImageRouter);

// Root route
app.get("/", (req, res) => {
    res.status(200).json({
        message: "Welcome to the AI-generated image generator API!",
    });
});

// MongoDB connection
const connectDB = async () => {
    mongoose.set("strictQuery", true);
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("MongoDB Connected");
    } catch (err) {
        console.error("MongoDB connection error:", err);
        process.exit(1); // Terminate if the connection fails
    }
};

// Server start function
const startServer = async () => {
    await connectDB(); // Ensure MongoDB is connected before starting the server
    app.listen(8000, () => console.log("Server started on 8000"));
};

startServer();
