import express from "express";
import dotenv from "dotenv";
import {connectDB} from "./config/database.js";
import userRoutes from "./Routes/User.js"
import fileUpload from "express-fileupload";
import cookieParser from "cookie-parser";
import cors from "cors";
const PORT = process.env.PORT || 3001;
const app = express();

dotenv.config();
app.use(express.json());
app.use(cookieParser());

connectDB(); 

app.use(
  cors({
    origin:"*",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp",
  })
);

app.use("/api/v1/auth", userRoutes);

app.get("/", (req, res) => {
  return res.json({
    success: true,
    message: "Your server is up and running...."
  });
});

app.listen(PORT, () => {
  console.log(`App is running at ${PORT}`);
});