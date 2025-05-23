import mongoose from "mongoose";

const FormSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    gustes: { type: String, required: true },
    weddingdate: { type: Date },
    reserveddate: { type: Date },
    menue: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.Form || mongoose.model("Form", FormSchema);
