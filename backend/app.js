const express = require('express');
const app = express();
const mongoose = require('mongoose');

let port = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.listen(port);