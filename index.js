var express = require('express');
var app = express();

//
var pg = require('pg');
var client = new pg.Client();

app.use(express.static('public'));

/*
 GET    /session/new gets the webpage that has the login form
 POST   /session authenticates credentials against database
 DELETE /session destroys session and redirect to /
 GET  /users/new gets the webpage that has the registration form
 POST /users records the entered information into database as a new /user/xxx
 GET  /users/xxx // gets and renders current user data in a profile view
 POST /users/xxx // updates new information about user
 */

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/static/index.html');
});

app.get('/users/new', (req, res) => {
  res.sendFile(__dirname + '/static/edit.html');
});

app.get('/users/:uid', (req, res) => {
  var uid = req.params.uid;
  console.log(uid);
  res.send("Trying to get user: " + uid);
});

app.post('/users', (req, res) => {

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
