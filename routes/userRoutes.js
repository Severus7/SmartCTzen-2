const express = require("express");
const userController = require("../controller/userController");
const authController = require("../controller/authController");

const userRouter = express.Router();

userRouter.post("/forgotPassword", authController.forgotPassword);
userRouter.patch("/resetPassword/:token", authController.resetPassword);

userRouter
  .route("/updateLoginCredentials")
  .patch(authController.protect, authController.updateLoginCredentials);

userRouter
  .route("/getMe")
  .get(authController.protect, userController.getMe, userController.getUser)

userRouter
  .route("/updateMe")
  .patch(authController.protect, userController.updateMe);

userRouter
  .route("/deleteMe")
  .delete(authController.protect, userController.deleteMe);

userRouter
  .route("/user/:id")
  .get(authController.protect, userController.getUser)
  .delete(
    authController.protect,
    authController.restrictTo("Administrator"),
    userController.deleteUser
  );

userRouter.post("/citizen/register", authController.registerCitizen);
userRouter.post("/citizen/login", authController.loginCitizen);
userRouter.post("/applicant/login", authController.loginApplicant);

userRouter.post("/admin/register", authController.registerAdmin);
userRouter.post("/admin/login", authController.loginAdministrator);

userRouter.post("/super-admin/register", authController.registerSuperAdmin);
userRouter.post("/super-admin/login", authController.loginSuperAdministrator);

userRouter
  .route("/getAllUsers")
  .get(authController.protect, userController.getAllUsers);

userRouter
  .route("/getAllApplicants")
  .get(authController.protect, userController.getAllApplicants);

userRouter
  .route("/getAllAdministrators")
  .get(authController.protect, userController.getAllAdministrators);

userRouter
  .route("/getAllCitizens")
  .get(authController.protect, userController.getAllCitizens);

userRouter
  .route("/getAllSuperAdministrators")
  .get(authController.protect, userController.getAllSuperAdministrators);

module.exports = userRouter;
