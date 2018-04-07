const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config');
const seedController = require('./controllers/setSeedData');
const apiController = require('./controllers/apiController');

var port = process.env.PORT || 4200;

app.set('view engine', 'ejs');
mongoose.connect(config.getDbConnectionUrl());
seedController(app);
apiController(app);

app.listen(port);