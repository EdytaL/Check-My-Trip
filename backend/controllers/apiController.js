const TripDetails = require('../models/tripDetails');
const bodyParser = require('body-parser');
const errors = require('../helpers/errors');

module.exports = function(app) {
    // parse data before use
    app.use(bodyParser.json());
    // encode url placeholders
    app.use(bodyParser.urlencoded({ extended: true }));

    app.get('/trip/details/:bookingCode/:familyName', function(req, res) {
        // use mongoose model to find url parameters in document
        TripDetails.findOne({ bookingCode: req.params.bookingCode })
            .where('passenger.lastName')
            .equals(req.params.familyName)
            .exec(function(err, details) {
                if(err) throw err;
                if(!details) res.status(500).send({ error: { code: [errors.ERR_500, "Error"], message: 'Reservation not found' } });
                else res.send(details);
            })
    });
};
