const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Report title is required']
    },
    caption: {
        type: String,
        required: [true, 'Report caption is required']
    },
    description: {
        type: String,
        required: [true, 'Report description is required']
    },
    location: {
        type: String,
        required: [true, 'Report location is required']
    },
    status: {
        type: String,
        enum: ['Unverified', 'Verified', 'Cancelled', 'Resolved'],
        default: 'Unverified'
    },
});

const Report = mongoose.model('Report', reportSchema);
module.exports = Report;