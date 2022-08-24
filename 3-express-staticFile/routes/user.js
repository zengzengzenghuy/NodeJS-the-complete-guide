const express = require('express');
const path = require('path');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/user',(req,res,next)=>{
    res.sendFile(path.join(rootDir,"views","user.html"));
})

module.exports=router;
