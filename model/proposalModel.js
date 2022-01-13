const mongoose = require("mongoose");
const slugify = require("slugify");
const validator = require("validator");

const proposalSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      maxlength: [20, "Proposal must have less than or equal to 40 characters"],
    },
    caption: {
      type: String,
      required: [true, "Caption is required"],
      maxlength: [
        115, 
        "Proposal must have less than or equal to 40 characters",
      ],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    location: {
      type: String,
      default: "TBA",
    },
    like: {
      type: Number,
      default: 0,
    },
    dislike: {
      type: Number,
      default: 0,
    },
    status: {
      type: String,
      enum: ["Needs approval", "Approved", "Rejected"],
      default: "Needs approval",
    },
    submittedAt: {
      type: Date,
      default: Date.now(),
    },
    date: {
      type: Date,
      default: null,
    },
    slug: String,
    commentors: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Virtual Populate
proposalSchema.virtual("comments", {
  ref: "CommentProposal",
  foreignField: "proposal",
  localField: "_id",
});

// DOCUMENT MIDDLEWARE: runs before .save() and .create()
proposalSchema.pre("save", function (next) {
  this.slug = slugify(this.title, { lower: true });
  next();
});

const Proposal = mongoose.model("Proposal", proposalSchema);
module.exports = Proposal;
