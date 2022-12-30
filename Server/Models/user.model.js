import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: false
    },
    EventsConfirmed: {
        type: [String],
        default: []
    },
    EventsPending: {
        type: [String],
        default: []
    }
  },
  {
    versionKey: false,
    timestamps: true
  }
);
const userModel = mongoose.model("User", userSchema);

export default userModel;
