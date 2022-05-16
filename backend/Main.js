//getpath
var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var path = require('path');
var app = express();
var db_db = require('./db');
var conn = require('./conn');

app.use(express.json());


app.use(bodyParser.urlencoded({extended: false}));




app.post('/', (req,res)=> {
  
    conn.user(req,res);

});

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname + 'public/index.html'));
});


app.get('/getItem', (req, res) => {
  conn.getItem(req, res);
});

app.listen(3000,function(req,res){
    console.log('Server started to listen at 3000');
})