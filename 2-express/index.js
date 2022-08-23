const express = require("express");
const app = express();

// will be executed everytime
// app.use((req,res,next)=>{
//     console.log("Executed 1");
//     next()
// })
// app.use((req,res,next)=>{
//     console.log("Executed 2");
//     res.send("Done")
// })
// match the /users first
// if put after '/', will not execute this function
app.use('/users',(req,res,next)=>{
    console.log("User");
    res.send('<p>Handle User</p>')
})

app.use('/',(req,res,next)=>{
    console.log("root");
    res.send('<p>Handle root</p>')
})



app.listen(3000);