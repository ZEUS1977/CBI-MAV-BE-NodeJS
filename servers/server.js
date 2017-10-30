var express = require('express');
var bodyParser = require("body-parser");
var app = express();
var usrService = require("../services/UserService.js");
// This should work both there and elsewhere.
function isEmptyObject(obj) {
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      return false;
    }
  }
  return true;
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
/*
app.get('/', function(req, res){
    console.log('GET /')
    //var html = '<html><body><form method="post" action="http://localhost:3000">Name: <input type="text" name="name" /><input type="submit" value="Submit" /></form></body>';
    //var html = fs.readFileSync('index.html');
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('ok');
    //res.end(html);
});
*/
app.post('/', function(req, res) {
    console.log('POST /');
    console.log(req.body);
    console.log('ok');
    if(!isEmptyObject(req.body))
      usrService.insertOne(req.body);
    else
      console.log('Empty data in request');
    res.header("Access-Control-Allow-Origin", "http://localhost:8080");
    res.header("Access-Control-Allow-Headers", "Origin, Authorization, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.sendStatus(200);
    res.end('{response: ok}');
});

/*
app.post('/', function(req, res){
    console.log('POST /');
    console.log(JSON.parse(req.body));
    res.writeHead(200, {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      });
    usrClient.register(req.body);

    res.json('{result: ok}');

});
*/
port = 7777;
app.listen(port);
console.log('Listening at http://localhost:' + port)
