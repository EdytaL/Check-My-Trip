//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist'));

app.get('/app', function(req,res) {

  res.sendFile(path.join(__dirname+'/src/index.html'));
});
app.get('/api', function(req,res) {

  res.sendFile(path.join(__dirname+'/backend/index.app.js'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
