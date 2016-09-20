var express = require('express');
var db = require('./db/DBClient');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

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

app.post('/users', (req, res) => {
  console.log(req.body);
  res.sendStatus(200);
  // on the form submission, do form validation

  // hook up the button to this endpoint

  // insert a new row into the users table
});

app.get('/users/:uid', (req, res) => {
  db.query('select * from users where id = $1', [req.params.uid], function(err, result) {
    if (result == null || result.rows.length === 0) {
      res.status(404).send('Not Found');
    } else {
      res.json(result.rows);
    }
  });
});

app.get('/genders', (req, res) => {
  db.query('select * from genders', [], function(err, result) {
      if (result == null || result.rows.length === 0) {
        res.status(404).send('Not Found');
      } else {
        res.json(result.rows);
      }
  });
});

app.listen(8080);
