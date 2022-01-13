const CommentProposal = require('../model/commentProposalModel');
const catchAsync = require('../utils/catchAsync');
const factory = require("./handlerFactory");

exports.getComment = factory.getOne(CommentProposal);
exports.createComment = factory.createOne(CommentProposal);
exports.deleteComment = factory.deleteOne(CommentProposal);

exports.getAllComments = catchAsync(async (req, res, next) => {
    let filter = {};
    if(req.params.proposalId) filter = { proposal: req.params.proposalId }
    
    const comments = await CommentProposal.find(filter);

    res.status(200).json({
        status: 'success',
        results: comments.length,
        comments,
    });
});

exports.setProposalUserIds = (req, res, next) => {
    // Allow nested routes
    if(!req.body.proposal) req.body.proposal = req.params.proposalId;
    if(!req.body.user) req.body.user = req.user.id;
    next();
};

// exports.createComment = catchAsync(async (req, res, next) => {
//     // Allow nested routes
//     if(!req.body.proposal) req.body.proposal = req.params.proposalId;
//     if(!req.body.user) req.body.user = req.user.id;
//     next();

//     const newComment = await CommentProposal.create(req.body);

//     res.status(201).json({
//         status: 'success',
//         comment: newComment
//     });
// });

