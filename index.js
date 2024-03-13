const express = require('express');
const http = require("http");
const { Server } = require("socket.io");
const path = require('path');

//create express app and set 'public' directory to serve static pages
const app = express();
app.use(express.static(path.resolve('./public')));

//create http and socket server
const server = http.createServer(app);
const io = new Server(server);

//create a socket connection whenever a new user connects
io.on("connection", (socket) => {

    //when a message is received from a user broadcast it to others
    socket.on("send", (data) => {
        socket.broadcast.emit("broadcast", data);
    })
})

//define the home api, returning the index.html file
app.get('/', (req, res) => {
    return res.sendFile('/public/index.html');
})

//get the port and start the server
const port = process.env.PORT || 3333;
server.listen(port,"0.0.0.0", () => {
    console.log("Server up");
});