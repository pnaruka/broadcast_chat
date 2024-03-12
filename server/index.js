const express = require('express');
const http = require("http");
const {port} = require('./config.js');
const {Server} = require("socket.io");
const cors = require("cors");

const app = express();
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
    cors: {origin:"http://localhost:3000", methods:["GET", "POST"]}
});

io.on("connection",(socket)=>{
    console.log(`new user connected ${socket.id}`);
    socket.on("send", (data)=>{
        socket.broadcast.emit("receive", data);
    })
})

app.get('/',(req,res)=>{
    res.status(201).json('Wazzzup');
})


    
server.listen(port, ()=>{
    console.log(`Server up and listening on ${port}`);
});