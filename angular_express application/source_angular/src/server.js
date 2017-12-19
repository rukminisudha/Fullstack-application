var fs = require('fs');
var path = require('path');
var express = require('express');
var app = express();

var BOOKS_FILE = path.join(__dirname, 'books.json');

app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(path.join(__dirname, '.')));

app.get('/books', function(req, res) {
  fs.readFile(BOOKS_FILE, function(err, data) {
    if (err) {
      console.error(err);
      res.statusCode = 500;
      res.description = "Internal Error";
      res.send(err);
    }
    else {
      res.setHeader('Cache-Control', 'no-cache');
      res.json(JSON.parse(data));
    }
  });
});

app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});
