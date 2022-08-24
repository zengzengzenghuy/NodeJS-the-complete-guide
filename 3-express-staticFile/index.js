const express = require("express");
const app = express();
const path = require('path');

const userRoutes = require('./routes/user');
const rootRoutes = require('./routes/root');

// Don't need to add 'css' folder
app.use(express.static(path.join(__dirname,'public')));
app.use(userRoutes);
app.use(rootRoutes);

app.listen(3000);
