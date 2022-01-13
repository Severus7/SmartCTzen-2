const Report = require('../model/reportModel');
const catchAsync = require('../utils/catchAsync');
const factory = require("./handlerFactory");

exports.getAllReports = factory.getAll(Report);
exports.getReport = factory.getOne(Report)
exports.createReport = factory.createOne(Report);
exports.updateReport = factory.updateOne(Report);
exports.deleteReport = factory.deleteOne(Report);

exports.getUnverifiedReports = catchAsync(async (req, res, next) => {
    const reports = await Report.find( { status: { $eq: 'Unverified' } } );

    res.status(200).json({
        status: "success",
        reports
    });
});

exports.getVerifiedReports = catchAsync(async (req, res, next) => {
    const reports = await Report.find( { status: { $eq: 'Verified' } } );

    res.status(200).json({
        status: "success",
        reports
    });
});

exports.getCancelledReports = catchAsync(async (req, res, next) => {
    const reports = await Report.find( { status: { $eq: 'Cancelled' } } );

    res.status(200).json({
        status: "success",
        reports
    });
});

exports.getResolvedReports = catchAsync(async (req, res, next) => {
    const reports = await Report.find( { status: { $eq: 'Resolved' } } );

    res.status(200).json({
        status: "success",
        reports
    });
});



// exports.getAllReports = catchAsync(async (req, res, next) => {
//     const features = new APIFeatures(Report.find(), req.query)
//         .filter()
//         .sort()
//         .limit();

//     const reports = await features.query;

//     res.status(200).json({
//         status: 'success',
//         reports
//     });
// });

// exports.getReport = catchAsync(async (req, res, next) => {
//     const report = await Report.findById(req.params.id);

//     res.status(200).json({
//         status: 'success',
//         report
//     });
// });

