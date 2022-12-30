import mongoose from "mongoose";

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
    players: [
      {playerName: String},
      {playerId: String}
    ],
    // Requestplayers: {
    //     type: [String],
    //     required: false
    // },
    Requestplayers: [
      {playerName: String},
      {playerId: String}
    ]
  },
  {
    versionKey: false,
    timestamps: true
  }
);
const eventModel = mongoose.model("Event", eventSchema);

export default eventModel;
