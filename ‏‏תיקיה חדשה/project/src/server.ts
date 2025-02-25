import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./router/indexRouter";
import userRouter from "./router/userRouter";
import { PORT, MONGO_URI, FRONTEND_URL } from "./config";
const app= express();

app.use(cookieParser());
app.use(cors({
  origin: FRONTEND_URL,
  credentials: true,
}));
app.use(express.json());
app.use(express.static('public'));

app.use("/auth", authRoutes);
app.use("/users", userRouter);




mongoose.connect(MONGO_URI!)
  .then(() => {
    console.log("✅ Connected to MongoDB");
    app.listen(PORT, () => console.log(`🚀 Server running at: http://localhost:${PORT}`));
  })
  .catch((error) => console.error("❌ MongoDB connection error:", error));
