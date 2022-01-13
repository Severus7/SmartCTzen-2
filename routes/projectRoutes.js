const express = require("express");
const projectController = require("../controller/projectController");
const authController = require("../controller/authController");

const projectRouter = express.Router();

projectRouter
  .route("/projects/all")
  .get(
    authController.protect,
    authController.restrictTo("Citizen", "Administrator"),
    projectController.getAllProjects
  );

projectRouter
  .route("/projects/coming-soon")
  .get(
    authController.protect,
    authController.restrictTo("Citizen", "Administrator"),
    projectController.getComingSoonProjects
  );

projectRouter
  .route("/projects/ongoing")
  .get(
    authController.protect,
    authController.restrictTo("Citizen", "Administrator"),
    projectController.getOngoingProjects
  );

projectRouter
  .route("/projects/accomplished")
  .get(
    authController.protect,
    authController.restrictTo("Citizen", "Administrator"),
    projectController.getAccomplishedProjects
  );

projectRouter
  .route("/projects")
  .post(
    authController.protect,
    authController.restrictTo("Citizen", "Administrator"),
    projectController.createProject
  );

projectRouter
  .route("/projects/:id")
  .get(
    authController.protect,
    authController.restrictTo("Citizen", "Administrator"),
    projectController.getProject
  )
  .patch(
    authController.protect,
    authController.restrictTo("Administrator"),
    projectController.updateProject
  )
  .delete(
    authController.protect,
    authController.restrictTo("Administrator"),
    projectController.deleteProject
  );

module.exports = projectRouter;
