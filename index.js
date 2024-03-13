const express = require('express');
const http = require("http");
const { Server } = require("socket.io");
const path = require('path');

const app = express();
app.use(express.static(path.resolve('./public')));
const server = http.createServer(app);

const io = new Server(server);

io.on("connection", (socket) => {
    //console.log(`new user connected ${socket.id}`);
    socket.on("send", (data) => {
        socket.broadcast.emit("broadcast", data);
    })
})

app.get('/', (req, res) => {
    return res.sendFile('/public/index.html');
})

const port = process.env.port || 3333;

server.listen(port, () => {
    console.log(`Server up and listening on ${port}`);
});