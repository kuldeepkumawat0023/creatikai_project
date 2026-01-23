
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import db from './app/config/db.js';
import logger from './app/middleware/logger.js';
import routes from './app/routes/userRoutes.js';

dotenv.config();

const app = express();
db();

app.use(cookieParser()); 

app.use(
  cors({
    origin: "http://localhost:3000", 
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());
app.use(logger);
app.use("/uploads", express.static("uploads"));

// ✅ Routes
app.use("/api", routes);

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

