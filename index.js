const express = require('express');
const {port, DB_URL} = require('./config.js');
const mongoose =  require('mongoose');

const app = express();
app.use(express.json());

app.get('/',(req,res)=>{
    res.status(201).json('Wazzzup');
})

mongoose.connect(DB_URL).then(()=>{
    console.log('DB connected');
    
app.listen(port, ()=>{
    console.log(`Server up and listening on ${port}`);
});
}).catch((error)=>{
    console.log(error);
})