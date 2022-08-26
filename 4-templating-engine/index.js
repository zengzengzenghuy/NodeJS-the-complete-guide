const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const users = []
app.set('view engine','ejs');
app.set('views','views');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));
app.get('/',(req,res,next)=>{
    res.render('root',{pagetitle:'Add User'})
})
app.get('/users',(req,res,next)=>{
    res.render('user',{
        pagetitle: 'Users',
        users: users,
        hasUsers: users.length > 0
    })
})
app.post('/add-user',(req,res,next)=>{
    users.push({name:req.body.username})
    res.redirect('/');
})

app.listen(3000);