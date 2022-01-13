const dotenv = require("dotenv");
const User = require("../model/userModel");
const catchAsync = require("../utils/catchAsync");
const APIFeatures = require("../utils/apiFeatures");
const AppError = require("../utils/appError");
const factory = require("./handlerFactory");

const filterObj = (obj, ...allowedFields) => {
    const newObj = {};
    Object.keys(obj).forEach(el => {
        if(allowedFields.includes(el)) newObj[el] = obj[el];
    });
    return newObj;
};

exports.getAllUsers = factory.getAll(User);
exports.getUser = factory.getOne(User);
exports.deleteUser = factory.deleteOne(User);

exports.getMe = (req, res, next) => {
  req.params.id = req.user.id,
  next();
};

exports.getAllApplicants = catchAsync(async (req, res, next) => {
  const applicants = await User.find({ role: { $eq: "Applicant" } });

  res.status(200).json({
    status: "success",
    applicants,
  });
});

exports.getAllCitizens = catchAsync(async (req, res, next) => {
  const citizens = await User.find({ role: { $eq: "Citizen" } });

  res.status(200).json({
    status: "success",
    citizens,
  });
});

exports.getAllAdministrators = catchAsync(async (req, res, next) => {
  const administrators = await User.find({ role: { $eq: "Administrator" } });

  res.status(200).json({
    status: "success",
    administrators,
  });
});

exports.getAllSuperAdministrators = catchAsync(async (req, res, next) => {
  const superAdministrators = await User.find({
    role: { $eq: "Super Administrator" },
  });

  res.status(200).json({
    status: "success",
    superAdministrators,
  });
});

exports.updateMe = catchAsync(async (req, res, next) => {
  // 1) Create error if user POSTs password data
  if (req.body.password || req.body.passwordConfirm) {
    return next(new AppError("This route is not password update", 400));
  }

  // 2) Filtered unwanted field names that are not allowed to be updated
  const filteredBody = filterObj(req.body, 'lastname', 'firstname', 'middlename');

  // 3) Update user document
  const updatedUser = await User.findByIdAndUpdate(req.user.id, filteredBody, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    status: "success",
    user: updatedUser
  });
});

exports.deleteMe = catchAsync(async (req, res, next) => {
    const user = await User.findByIdAndUpdate(req.user.id, { active: false });

    res.status(204).json({
        status: 'success',
        user
    });
});

// exports.getAllUsers = catchAsync(async (req, res, next) => {
//   const features = new APIFeatures(User.find(), req.query)
//     .filter()
//     .sort()
//     .limit();

//   const users = await features.query;

//   res.status(200).json({
//     status: "success",
//     users,
//   });
// });

// exports.getUser = catchAsync(async (req, res, next) => {
//   const user = await User.findById(req.params.id);

//   if(!user) {
//     return next(new AppError('No user found', 404));
//   }

//   res.status(200).json({
//     status: 'success',
//     user,
//   });
// });