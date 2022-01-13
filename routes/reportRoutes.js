const express = require("express");
const reportController = require("../controller/reportController");
const authController = require("../controller/authController");

const reportRoutes = express.Router();

reportRoutes
  .route("/reports/all")
  .get(
    authController.protect,
    authController.restrictTo("Citizen", "Administrator"),
    reportController.getAllReports
  );

reportRoutes
  .route("/reports/unverified")
  .get(
    authController.protect,
    authController.restrictTo("Citizen", "Administrator"),
    reportController.getUnverifiedReports
  );

reportRoutes
  .route("/reports/verified")
  .get(
    authController.protect,
    authController.restrictTo("Citizen", "Administrator"),
    reportController.getVerifiedReports
  );

reportRoutes
  .route("/reports/cancelled")
  .get(
    authController.protect,
    authController.restrictTo("Citizen", "Administrator"),
    reportController.getCancelledReports
  );

reportRoutes
  .route("/reports/resolved")
  .get(
    authController.protect,
    authController.restrictTo("Citizen", "Administrator"),
    reportController.getResolvedReports
  );

reportRoutes.post(
  "/reports",
  authController.restrictTo("Citizen", "Administrator"),
  reportController.createReport
);

reportRoutes
  .route("/reports/:id")
  .get(
    authController.protect,
    authController.restrictTo("Citizen", "Administrator"),
    reportController.getReport
  )
  .patch(
    authController.protect,
    authController.restrictTo("Administrator"),
    reportController.updateReport
  )
  .delete(
    authController.protect,
    authController.restrictTo("Administrator"),
    reportController.deleteReport
  );

module.exports = reportRoutes;
