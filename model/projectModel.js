const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Project title is required"]
    },
    caption: {
        type: String,
        required: [true, "Project caption is required"]
    },
    description: {
        type: String,
        required: [true, "Project description is required"]
    },
    location: {
        type: String,
        required: [true, "Project location is required"]
    },
    rate: {
        type: Number,
        default: 0
    },
    status: {
        type: String,
        enum: ['Coming soon', 'Ongoing', 'Accomplished'],
        default: 'Coming soon'
    },
});

const Project = mongoose.model('Project', projectSchema);
module.exports = Project;