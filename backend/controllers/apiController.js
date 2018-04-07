var TripDetails = require('../models/tripDetails');
var bodyParser = require('body-parser');

module.exports = function(app) {
    // parse data before use
    app.use(bodyParser.json());
    // encode url placeholders
    app.use(bodyParser.urlencoded({ extended: true }));

    app.get('/api/trip/:bookingCode/:familyName', function(req, res) {
        // use mongoose model to find url parameters in document
        TripDetails.findOne({
            bookingCode: req.params.bookingCode
         }.$where('passenger.lastName').equals(req.params.familyName), function(err, details) {
            if(err) throw err;
            res.send(details);
        })
    });
}