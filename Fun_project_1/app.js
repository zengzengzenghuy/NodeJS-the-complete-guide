const express = require('express');

const app = express();

const shopRoute = require('./routes/shop')

app.get('/', shopRoute);

app.listen(3000);