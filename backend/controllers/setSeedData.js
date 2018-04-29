var TripDetails = require('../models/tripDetails').model('TripDetails');

module.exports = function(app) {

    app.get('/setSeed', function(req, res) {
        // seed database
        TripDetails.find({}, function (err, collection) {
            if(err) res.send(err);
            if(collection.length === 0) {
                let tripSeed = new TripDetails(
                {
                    "bookingCode": "PZIGZ3",
                    "itinerary": {
                    "type": "ONE_WAY",
                        "connections": [
                        {
                            "duration": "120",
                            "origin": {
                                "IATACode": "AMS",
                                "name": "Schiphol",
                                "country": "The Netherlands",
                                "city": "Amsterdam"
                            },
                            "destination": {
                                "IATACode": "NCE",
                                "name": "Cote D'Azur Airport",
                                "city": "Nice",
                                "country": "France"
                            },

                            "marketingFlight": {
                                "number": "1263",
                                "carrier": "KLM",
                                "status": {
                                    "code": "CONFIRMED",
                                    "name": "Confirmed"
                                },
                                "numberOfStops": 0
                            },
                            "operatingFlight": {
                                "number": "1263",
                                "checkInStart": "2016-10-13T03:35+02:00",
                                "localCheckInStart": "2016-10-13T03:35",
                                "checkInEnd": "2016-10-14T08:35+02:00",
                                "localCheckInEnd": "2016-10-14T08:35",
                                "scheduledArrival": "2016-10-14T11:35+02:00",
                                "localScheduledArrival": "2016-10-14T11:35",
                                "scheduledDeparture": "2016-10-14T09:35+02:00",
                                "localScheduledDeparture": "2016-10-14T09:35",
                                "arrivalTerminal": "2",
                                "cabin": {
                                    "code": "10",
                                    "name": "Business"
                                },
                                "equipment": {
                                    "code": "73H",
                                    "name": "Boeing 737-800"
                                }
                            }
                        }]
                },
                    "passenger": {
                    "firstName": "RUUD",
                        "lastName": "HESP",
                        "title": {
                        "code": "MR",
                            "name": "Mr"
                    },
                    "contactEmail": "test@gmail.com"
                }
            });
                tripSeed.save();
                res.send('Seeded');
            } else {
                res.send('Already done');
            };
        });


    })
};
