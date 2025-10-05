import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { userRoute } from './routes/userRoute.js';
import { residencyRoute } from './routes/residencyRoute.js';

dotenv.config()

const app = express();

const PORT = process.env.PORT || 8000; // Using 8000 as a common backend port

app.use(express.json());
app.use(cookieParser());

// Configure CORS to only allow requests from your frontend URL
app.use(cors({
  origin: "https://rentify-main.vercel.app",
  optionsSuccessStatus: 200
}));

// Mount your API routes
app.use("/api/user", userRoute);
app.use("/api/residency", residencyRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
