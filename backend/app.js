const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config');
const seedController = require('./controllers/setSeedData');
const apiController = require('./controllers/apiController');

const port = process.env.PORT || 4000;

app.set('view engine', 'ejs');
mongoose.connect(config.getDbConnectionUrl());
seedController(app);
apiController(app);

app.listen(port);