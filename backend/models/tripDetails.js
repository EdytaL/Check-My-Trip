var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var tripDetailsSchema = {

    "bookingCode": String,
    "itinerary": {
    "type": String,
        "connections": [
        {
            "duration": String,
            "origin": {
                "IATACode": String,
                "name": String,
                "city": {
                    "IATACode": String,
                    "name": String,
                    "country": {
                        "code": String,
                        "name": String
                    }
                }
            },
            "destination": {
                "IATACode": String,
                "name": String,
                "city": {
                    "IATACode": String,
                    "name": String,
                    "country": {
                        "code": String,
                        "name": String
                    }
                },
            },
            "segments": [
                {
                    "type": String,
                    "informational": Boolean,
                    "departFrom": {
                        "IATACode": String,
                        "name": String,
                        "city": {
                            "IATACode": String,
                            "name": String,
                            "country": {
                                "code": String,
                                "name": String
                            }
                        },
                    },
                    "arriveOn": {
                        "IATACode": String,
                        "name": String,
                        "city": {
                            "IATACode": String,
                            "name": String,
                            "country": {
                                "code": String,
                                "name": String
                            }
                        },
                    },
                    "marketingFlight": {
                        "number": String,
                        "carrier": {
                            "code": String,
                            "name": String
                        },
                        "status": {
                            "code": String,
                            "name": String
                        },
                        "numberOfStops": 0,
                        "sellingClass": {
                            "code": String
                        },
                        "operatingFlight": {
                            "number": String,
                            "carrier": {
                                "code": String,
                                "name": String
                            },
                            "duration": String,
                            "flown": Boolean,
                            "checkInStart": String,
                            "localCheckInStart": String,
                            "checkInEnd": String,
                            "localCheckInEnd": String,
                            "scheduledArrival": String,
                            "localScheduledArrival": String,
                            "scheduledDeparture": String,
                            "localScheduledDeparture": String,
                            "arrivalTerminal": {
                                "name": String
                            },
                            "cabin": {
                                "code": String,
                                "name": String
                            },
                            "equipment": {
                                "code": String,
                                "name": String
                            }
                        }
                    }
                }]
        }]
    },
    "passenger": {
        "firstName": String,
        "lastName": String,
        "title": {
            "code": String,
            "name": String
        }
    }

};

var TripDetails = mongoose.model('TripDetails', tripDetailsSchema);

module.exports = TripDetails;