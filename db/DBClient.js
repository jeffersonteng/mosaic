/**
 * Created by jteng on 9/17/16.
 */
var pg = require('pg');

// The size of my pool is ridiculous. Sane pool size is 25-100 according to brianc
pg.defaults.poolSize = 20;

module.exports = {
    query: function(text, values, cb) {
        pg.connect(function(err, client, done) {
            client.query(text, values, function(err, result) {
                done();
                cb(err, result);
            })
        });
    }
};
