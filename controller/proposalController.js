const Proposal = require("../model/proposalModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const factory = require("./handlerFactory");

exports.getAllProposals = factory.getAll(Proposal);
exports.getProposal = factory.getOne(Proposal, { path: 'comments' });
exports.createProposal = factory.createOne(Proposal);
exports.updateProposal = factory.updateOne(Proposal);
exports.deleteProposal = factory.deleteOne(Proposal);

exports.getNeedsApproval = catchAsync(async (req, res, next) => {
  const proposals = await Proposal.find({ status: { $eq: "Needs approval" } });

  res.status(200).json({
    status: "success",
    proposals,
  });
});

exports.getApprovedProposals = catchAsync(async (req, res, next) => {
    const proposals = await Proposal.find({ status: { $eq: "Approved" } });

    res.status(200).json({
        status: "success",
        proposals,
    });
});

exports.getRejectedProposals = catchAsync(async (req, res, next) => {
    const proposals = await Proposal.find({ status: { $eq: "Rejected" } });

    res.status(200).json({
        status: "success",
        proposals,
    });
});

// exports.getAllProposals = catchAsync(async (req, res, next) => {
//   const features = new APIFeatures(Proposal.find(), req.query)
//     .filter()
//     .sort()
//     .limit();

//   const proposals = await features.query;

//   res.status(200).json({
//     status: "success",
//     proposals,
//   });
// });

// exports.getProposal = catchAsync(async (req, res, next) => {
//   const proposal = await Proposal.findById(req.params.id).populate('comments');

//   if (!proposal) {
//     return next(new AppError('No proposal found', 404));
//   }

//   res.status(200).json({
//     status: "success",
//     proposal,
//   });
// });


// exports.deleteProposal = catchAsync(async (req, res, next) => {
//   const proposal = await Proposal.findByIdAndDelete(req.params.id);

//   if (!proposal) {
//     return next(new AppError("No proposal found with that ID", 404));
//   }

//   res.status(204).json({
//     status: "success",
//     data: null,
//   });
// });

// exports.getMonthylProposals = catchAsync(async (req, res, next) => {
//   const year = req.params.year * 1;

//   const proposals = await Proposal.aggregate([
//     {
//       $unwind: 
//     }
//   ]);
// });
