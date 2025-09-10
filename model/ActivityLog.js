import mongoose from "mongoose";

const ActivityLogSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  activityType: {
    type: String,
    enum: ["upload", "delete", "login", "share", "download"],
    required: true,
  },
  targetId: { type: mongoose.Schema.Types.ObjectId }, // Document or Folder
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.ActivityLog ||
  mongoose.model("ActivityLog", ActivityLogSchema);
