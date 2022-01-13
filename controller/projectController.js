const Project = require("../model/projectModel");
const catchAsync = require("../utils/catchAsync");
const factory = require("./handlerFactory");

exports.getAllProjects = factory.getAll(Project);
exports.getProject = factory.getOne(Project);
exports.createProject = factory.createOne(Project);
exports.updateProject = factory.updateOne(Project);
exports.deleteProject = factory.deleteOne(Project);

exports.getComingSoonProjects = catchAsync(async (req, res, next) => {
  const projects = await Project.find({ status: { $eq: "Coming soon" } });

  res.status(200).json({
    status: "success",
    projects,
  });
});

exports.getOngoingProjects = catchAsync(async (req, res, next) => {
  const projects = await Project.find({ status: { $eq: "Ongoing" } });

  res.status(200).json({
    status: "success",
    projects,
  });
});

exports.getAccomplishedProjects = catchAsync(async (req, res, next) => {
  const projects = await Project.find({ status: { $eq: "Accomplished" } });

  res.status(200).json({
    status: "success",
    projects,
  });
});

// exports.getAllProjects = catchAsync(async (req, res, next) => {
//   const features = new APIFeatures(Project.find(), req.query)
//     .filter()
//     .sort()
//     .limit();

//   const projects = await features.query;

//   res.status(200).json({
//     status: "success",
//     projects,
//   });
// });

// exports.getProject = catchAsync(async (req, res, next) => {
//   const project = await Project.findById(req.params.id);

//   res.status(200).json({
//     status: "success",
//     data: {
//       projects,
//     },
//   });
// });

// exports.deleteProject = catchAsync(async (req, res, next) => {
//   const project = await Project.findByIdAndDelete(req.params.id);

//   if (!project) {
//     return next(new AppError("No project found with that ID", 404));
//   }

//   res.status(204).json({
//     status: "success",
//     data: null,
//   });
// });
