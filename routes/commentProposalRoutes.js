const express = require("express");
const commentProposalController = require("../controller/commentProposalController");
const authController = require("../controller/authController");

const commentRouter = express.Router({ mergeParams: true });

commentRouter
  .route("/comments")
  .get(commentProposalController.getAllComments)
  .post(
    authController.protect,
    authController.restrictTo("Citizen", "Administrator"),
    commentProposalController.setProposalUserIds,
    commentProposalController.createComment
  );

commentRouter
    .route("/comments/:id")
    .get(authController.protect, commentProposalController.getComment)
    .delete(authController.protect, commentProposalController.deleteComment);

module.exports = commentRouter;
