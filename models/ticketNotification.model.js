import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    subject: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    receipentEmails: {
      type: [String],
      required: true,
    },
    status: {
      type: String,
      enum: {
        values: ["SUCCESS", "FAILED", "PENDING"],
        message: "Invalid ticket status",
      },
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const TicketNotification = mongoose.model("TicketNotification", schema);
