import express from "express";
import cors from "cors";
import "dotenv/config";
import multer from "multer";

const app = express()
const PORT = process.env.PORT || 4000;

// Middleware 
app.use(cors())
app.use(express.json())
app.use(multer().none())
