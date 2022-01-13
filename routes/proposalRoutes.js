const express = require("express");
const proposalController = require("../controller/proposalController");
const authController = require("../controller/authController");
const commentProposalRouter = require("../routes/commentProposalRoutes");

const proposalRouter = express.Router();

// proposalRouter
//   .route("/:proposalId/comments")
//   .post(
//     authController.protect,
//     authController.restrictTo("Citizen", "Administrator"),
//     commentProposalsController.createComment
//   );

proposalRouter.use("/:proposalId", commentProposalRouter);

proposalRouter
  .route("/proposals/all")
  .get(
    authController.protect,
    authController.restrictTo("Citizen", "Administrator"),
    proposalController.getAllProposals
  );

proposalRouter
  .route("/proposals/needs-approval")
  .get(
    authController.protect,
    authController.restrictTo("Citizen", "Administrator"),
    proposalController.getNeedsApproval
  );

proposalRouter
  .route("/proposals/approved")
  .get(
    authController.protect,
    authController.restrictTo("Citizen", "Administrator"),
    proposalController.getApprovedProposals
  );

proposalRouter
  .route("/proposals/rejected")
  .get(
    authController.protect,
    authController.restrictTo("Citizen", "Administrator"),
    proposalController.getRejectedProposals
  );

proposalRouter
  .route("/proposals")
  .post(
    authController.protect,
    authController.restrictTo("Citizen", "Administrator"),
    proposalController.createProposal
  );

proposalRouter
  .route("/proposal/:id")
  .get(
    authController.protect,
    authController.restrictTo("Citizen", "Administrator"),
    proposalController.getProposal
  )
  .patch(
    authController.protect,
    authController.restrictTo("Citizen", "Administrator"),
    proposalController.updateProposal
  )
  .delete(
    authController.protect,
    authController.restrictTo("Administrator"),
    proposalController.deleteProposal
  );

module.exports = proposalRouter;
