// DB, Cloudinary, JWT secrets
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from "../src/routes/auth.js";
import notificationRoutes from "../src/routes/notificationRoutes.js";
import connectDB from "../src/config/db.js";
import cors from "cors";

dotenv.config();

const app = express();

// app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    // credentials: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    allowedHeaders: "Content-Type,Authorization",
  })
);
// mongoose.connect(process.env.MONGO_URI).then(()=>
// console.log("MongoDB connected Successfully!!"))
// .catch(err => console.log("Error connecting to MongoDB", err));

connectDB();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/auth", authRoutes);
app.use("/api/notifications", notificationRoutes);

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
