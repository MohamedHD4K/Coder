import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import AuthRouter from "./routes/auth.route.ts";
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();

type Response = express.Response;

const serverUrl = process.env.SERVER_URL || "http://localhost";
const port = process.env.SERVER_PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet()); // Security middleware
app.use(cors()); // CORS middleware
app.use(cookieParser()); // Parse cookies
app.use(morgan("dev")); // Logging middleware

app.use("/api/auth", AuthRouter);

app.get("/api", (req, res: Response) => {
  res.json({ message: "Welcome to the API" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${serverUrl}:${port}/api/`);
});
