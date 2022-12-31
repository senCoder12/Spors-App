import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  eventName: {
    type: String
  },
  eventId: {
    type: String
  },
});
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
    EventsConfirmed:{
      type: [eventSchema],
      default: []
    },
    EventsPending: {
      type: [eventSchema],
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
