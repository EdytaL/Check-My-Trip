var TripDetails = require('../models/tripDetails').model('TripDetails');

module.exports = function(app) {

    app.get('/api/setSeed', function(req, res) {
        // seed database
        TripDetails.find({}, function (err, collection) {
            if(err) res.send(err);
            if(collection.length === 0) {
                TripDetails.create({title: 'Trips'}, function(err, results) {
                    res.send(results);
                })
            } else {
                res.send('Already done')
            };
        });


    })
};