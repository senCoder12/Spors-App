import mongoose from "mongoose";

const playerSchema = new mongoose.Schema({
  playerName: {
    type: String
  },
  playerId: {
    type: String
  },
});

const eventSchema = new mongoose.Schema(
  {
    title: {
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
    eventTime: {
      type: Date,
      required: false
    },
    description: {
        type: String,
        required: true
    },
    maximumNoOfPlayers: {
        type: Number,
        required: true
    },
    // players: {
    //     type: [String],
    //     required: false
    // },
    players: {
      type: [playerSchema],
      default: []
    },
    // Requestplayers: {
    //     type: [String],
    //     required: false
    // },
    Requestplayers: {
      type: [playerSchema],
      default: []
    }
  },
  {
    versionKey: false,
    timestamps: true
  }
);
const eventModel = mongoose.model("Event", eventSchema);

export default eventModel;
