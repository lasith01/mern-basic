const express = require('express');
const path = require('path');
const app =express();
const PORT = 5000;

//serve react app
app.use(express.static(path.join(__dirname, 'mern-front/build')));

//API endpoint
app.get('/',(req,res)=>{
    res.json({message: 'ApI is working'});
});

//serve react app
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname, 'mern-front/build','index.html'));
});

app.listen(PORT,()=>{
    console.log('Server is running on port ${PORT}');
});