import mongoose from "mongoose";

const OtpSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  code: { type: String, required: true },
  type: { type: String, enum: ["register", "login", "reset"], required: true },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create TTL index separately
OtpSchema.index({ createdAt: 1 }, { expireAfterSeconds: 300 });

export default mongoose.models.Otp || mongoose.model("Otp", OtpSchema);