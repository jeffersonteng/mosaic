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
    var userId = undefined;
    db.query(
        'INSERT INTO users (name, city, gender, race, orientation) VALUES ($1, $2, $3, $4, $5) RETURNING id',
        ['dog', 'cat', 0, 2, 3],
        function(err, result) {
            if (err) {
                res.status(500);
                throw err;
            }

            res.writeHead(302, {
                'Location': '/users/' + parseInt(result.rows[0].id)
            });
            res.end();
        }
    );
});

app.get('/users/:uid', (req, res) => {
    db.query('SELECT * FROM users WHERE id = $1', [req.params.uid], function(err, result) {
        if (result == null || result.rows.length === 0) {
            res.status(404).send('Not Found');
        } else {
            res.json(result.rows);
        }
    });
});

app.get('/genders', (req, res) => {
    db.query('SELECT * FROM genders', [], function(err, result) {
        if (result == null || result.rows.length === 0) {
           res.status(404).send('Not Found');
        } else {
            res.json(result.rows);
        }
    });
});

app.listen(8080);
