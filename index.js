const express = require('express');

const app = express();
app.use(express.json());

app.get('/',(req,res)=>{
    res.status(201).json('Wazzzup');
})

app.listen(3333, ()=>{
    console.log('Server up and listening on 3333');
});