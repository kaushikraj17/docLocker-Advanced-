import mongoose from "mongoose";

const DocumentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  fileUrl: { type: String, required: true }, // Firebase or S3 URL
  size: { type: Number },
  type: { type: String }, // "pdf", "image", "docx", etc.
  folderId: { type: mongoose.Schema.Types.ObjectId, ref: "Folder" }, // Parent folder
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  status: { type: String, enum: ["active", "deleted"], default: "active" },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Document ||
  mongoose.model("Document", DocumentSchema);
