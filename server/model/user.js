import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      tyep: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const user = mongoose.model("user", UserSchema);
