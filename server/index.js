import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import PostRouter from "../server/routes/Post"
dotenv.config();

const app = express();
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

app.use("/api/post",PostRouter);
// Root route
app.get("/", async (req, res) => {
    res.status(200).json({
        message: "Welcome to the AI-generated image generator API!",
    });
});

// MongoDB connection
const connectDB = () => {
    mongoose.set("strictQuery", true);
    mongoose
        .connect(process.env.MONGODB_URL)
        .then(() => console.log("MongoDB Connected"))
        .catch((err) => console.error("MongoDB connection error:", err));
};

// Server start function
const startServer = async () => {
    try {
        connectDB();
        app.listen(8000, () => console.log("Server started on 8000"));
    } catch (error) {
        console.error("Error starting server:", error);
        process.exit(1);
    }
};

startServer();
