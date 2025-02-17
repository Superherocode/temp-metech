import mongoose from "mongoose";

const emailSchema = new mongoose.Schema({
  address: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now }
});

// Đảm bảo MongoDB tự động xóa sau 24h
emailSchema.index({ createdAt: 1 }, { expireAfterSeconds: 86400 });

const Email = mongoose.model("Email", emailSchema);

export default Email;
