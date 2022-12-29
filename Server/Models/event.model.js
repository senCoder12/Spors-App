import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    eventName: {
      type: String,
      required: true,
    },
    ownerId: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    EventTime: {
      type: Date,
      required: false
    },
    description: {
        type: String,
        required: true
    },
    remainingNoOfPlayers: {
        type: Number,
        required: true
    },
    players: {
        type: [String],
        required: false
    },
    Requestplayers: {
        type: [String],
        required: false
    }
  },
  {
    versionKey: false,
    timestamps: true
  }
);
const eventModel = mongoose.model("Event", eventSchema);

export default eventModel;
