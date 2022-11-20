const mongoose = require("mongoose");

const JobSchema = mongoose.Schema(
  {
    company: {
      type: String,
      required: [true, "Please provide company name"],
      maxlength: 50,
    },
    position: {
      type: String,
      required: [true, "Please provide position"],
      maxlength: 100,
    },
    status: {
      type: String,
      enum: ["interview", "declined", "pending"],
      default: "pending",
    },
    jobType: {
      type: String,
      enum: ["full-time", "part-time", "remote", "internship"],
      default: "full-time",
    },
    jobLocation: {
      type: String,
      default: "my city",
      required: [true, "Please provide your new location"],
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "Users",
      required: [true, "Please provide user"],
    },
    isJobPriority: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Jobs", JobSchema);
