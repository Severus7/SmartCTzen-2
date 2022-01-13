const express = require('express');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');

// Import routes
const globalErrorHandler = require('./controller/errorController');
const AppError = require('./utils/appError');
const userRoutes = require('./routes/userRoutes');
const proposalRoutes = require('./routes/proposalRoutes');
const projectRoutes = require('./routes/projectRoutes');
const reportRoutes = require('./routes/reportRoutes');
const commentProposalRoutes = require('./routes/commentProposalRoutes');

const app = express();

// 1) GLOBAL MIDDLEWARES

// Set securit HTTP headers
app.use(helmet());


// Development logging
if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}


// Limit request from same API
const limiter = rateLimit({
    max: 1000,
    windowMs: 60 * 60 * 1000,
    message: 'Too many requests from this IP, please try again in am hour'
});

app.use('/api', limiter);

//Middleware

//Body parser
app.use(express.urlencoded({extended: false})); // parse body coming from a form
app.use(express.json()); // application.json

// Data sanitization against NoSQL query injection
app.use(mongoSanitize());

// Data sanitization against XSS attacks
app.use(xss());

// Prevent parameter pollution
app.use(hpp());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString;
    console.log(req.headers);

    next();
});

//insert routes
app.use('/api', userRoutes);
app.use('/api', proposalRoutes);
app.use('/api', projectRoutes);
app.use('/api', reportRoutes);
app.use('/api', commentProposalRoutes);

app.all('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on the server`, 404));
});

app.use(globalErrorHandler);

module.exports = app;