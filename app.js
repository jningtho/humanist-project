const express = require('express')
const app = express();


app.get('/', (req, res) => {
  res.sendFile(__dirname + 'index.html');
})

// app.listen(3000);

// var port = process.env.PORT || 3000,
//     http = require('http'),
//     fs = require('fs'),
//     html = fs.readFileSync('public/index.html');

