const express = require('express'); // Fast, unopinionated, minimalist web framework for node.
const app = express(); // Initiate Express Application
//const mongoose = require('mongoose');
//const config = require('./config/database'); // Mongoose Config
const path = require('path'); // NodeJS Package for file paths

/*
mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err) => {
  if (err) {
    console.log('Could NOT connect to database: ', err);
  } else {
  	console.log(config.secret);
    console.log('Connected to database: ' + config.db);
  }
});*/

// Provide static directory for frontend
app.use(express.static(__dirname + '/client/dist/'));



app.get('*', (req, res) => {
	 res.sendFile(path.join(__dirname + '/client/dist/index.html'));
});

app.listen(3002, () => {
  console.log('Listening on port 3002');
});