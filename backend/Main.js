var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var path = require('path');
var app = express();
var db_db = require('./db');
var conn = require('./conn');

app.use(express.json());
app.use('/home', express.static("./public"));

app.use(bodyParser.urlencoded({ extended: false }));


app.use('/', express.static("./public"));

app.post('/get', (req, res) => {

  conn.user(req, res);

});

app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});


app.get('/getItem', (req, res) => {
  console.log("여기까지 왔다.");
  conn.getItem(req, res);
});

app.listen(3000, function (req, res) {
  console.log('Server started to listen at 3000');
});