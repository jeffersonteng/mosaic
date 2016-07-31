var express = require('express');
var app = express();

//
var pg = require('pg');
var client = new pg.Client();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/db', (req, res) => {

  // connect to our database
  client.connect(function (err) {
    if (err) throw err;

    // execute a query on our database
    client.query('SELECT * FROM foo', function (err, result) {
      if (err) throw err;

      // disconnect the client
      client.end(function (err) {
        if (err) throw err;
      });

      res.json(result.rows);
    });
  });
});

app.listen(8080);
