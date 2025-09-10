import mongoose from "mongoose";

const RecycleBinSchema = new mongoose.Schema({
  docId: { type: mongoose.Schema.Types.ObjectId, ref: "Document", required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  deletedAt: { type: Date, default: Date.now }
});

export default mongoose.models.RecycleBin || mongoose.model("RecycleBin", RecycleBinSchema);
