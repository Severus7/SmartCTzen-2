const mongoose = require('mongoose');
const dotenv = require('dotenv');
const { Server } = require('socket.io');
const http = require('http');

//Uncaught exception handler
process.on('uncaughtException', err => {
    console.log(err.name, err.message);
    process.exit(1);
});

dotenv.config({ path: "./config.env" });
const app = require('./app');

// Start of Socket IO
const httpServer = http.createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: "*"
    }
});

let users = [];

const addUser = (userId, socketId) => {
    !users.some((user) => user.userId === userId) &&
    users.push({ userId, socketId });
};

const removeUser = (socketId) => {
    users = users.filter(user => user.socketId !== socketId);
};

const getUser = (userId) => {
    // console.log(users.find((user) => user.userId === userId));
    return users.find((user) => user.userId === userId);
};

io.on("connection", (socket) => {
    io.emit("Welcome", "Hello this is socket server");

    //take userId and socketId from user
    socket.on("addUser", (userId) => {
        addUser(userId, socket.id);
        io.emit("getUsers", users);
    });

    socket.on("sendMessage", ({ senderId, receiverId, text }) => {
        const user = getUser(receiverId);
        io.emit("getMessage", {
            senderId,
            text
        });
    });

    //when disconnect
    socket.on("disconnect", () => {
        console.log("A user disconnected");
        // removeUser(socket.id);
        io.emit("getUsers", users);
    });
});



// End of Socket IO

const DB = process.env.DATABASE.replace(
    "<PASSWORD>", 
    process.env.DATABASE_PASSWORD
);

mongoose.connect(DB).then(con => {
    console.log(con.connections);
    console.log('DB connected successfully');
});

const port = process.env.PORT || 3000;
const server = httpServer.listen(port);

process.on('unhandledRejection', err => {
    console.log(err.name, err.message);
    server.close(() => {
        process.exit(1);
    });
});
