import express from "express";
import cors from "cors";
import 'dotenv/config';
import cookieParser from "cookie-parser";
import connectDB from "./config/mongodb.js";
import emailRouter from "./routes/emailRoutes.js";

const app = express();
const port = process.env.PORT || 3000;
connectDB();

// Sử dụng routes
app.use("/api", emailRouter);

app.use(express.json())
app.use(cookieParser());
app.use(cors({credentials:true}))
app.get('/', (req, res) => {
  res.send('API Working!')
})

app.listen(port, ()=> console.log(`Server started on PORT:${port}`));