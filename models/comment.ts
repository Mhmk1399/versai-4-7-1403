import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  blogId: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  parentId: {
    type: String,
    default: null,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Comment ||
  mongoose.model("Comment", CommentSchema);
