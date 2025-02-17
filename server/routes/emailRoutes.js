import express from "express";
import { createEmail } from "../controllers/user/emailController.js"; // Thêm .js vào đường dẫn

const emailRouter = express.Router();

emailRouter.post("/emails", createEmail);

export default emailRouter;
