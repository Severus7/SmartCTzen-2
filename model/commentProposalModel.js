const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    comment: {
      type: String,
      required: [true, "Comment cannot be empty"],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    proposal: {
      type: mongoose.Schema.ObjectId,
      ref: "Proposal",
      required: [true, "Comment must belong to a proposal."],
    },
    commentor: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: [true, "Comment must belong to a user"],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

commentSchema.pre(/^find/, function (next) {
    // this.populate({
    //     path: "proposal",
    //     select: "title",
    //   }).populate({
    //     path: "user",
    //     select: "firstname lastname", //Add profilepic later
    //   });

  this.populate({
    path: "user",
    select: "firstname lastname", //Add profilepic later
  });

  next();
});

const CommentProposal = mongoose.model("CommentProposal", commentSchema);
module.exports = CommentProposal;
