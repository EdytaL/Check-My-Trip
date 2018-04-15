const TripDetails = require('../models/tripDetails');
const bodyParser = require('body-parser');

module.exports = function(app) {
    // parse data before use
    app.use(bodyParser.json());
    // encode url placeholders
    app.use(bodyParser.urlencoded({ extended: true }));
    
    app.post('/api/trip', function(req, res) {
        if(req.body.id) {
            TripDetails.findByIdAndUpdate(req.body.id, {
                bookingCode: req.body.bookingCode,
                itinerary: {
                    type: req.body.type,
                    connections: [
                    {
                        duration: req.body.itinerary.connections.duration,
                        origin: {
                            IATACode: req.body.itinerary.connections.origin.IATACode,
                            name: req.body.itinerary.connections.origin.name,
                            city: {
                                IATACode: req.body.itinerary.connections.origin.city.IATACode,
                                name: req.body.itinerary.connections.origin.city.name,
                                country: {
                                    code: req.body.itinerary.connections.origin.city.country.code,
                                    name: req.body.itinerary.connections.origin.city.country.name
                                }
                            }
                        },
                        destination: {
                            IATACode: req.body.itinerary.connections.destination.IATACode,
                            name: req.body.itinerary.connections.destination.name,
                            city: {
                                IATACode: req.body.itinerary.connections.origin.destination.IATACode,
                                name: req.body.itinerary.connections.origin.destination.name,
                                country: {
                                    code: req.body.itinerary.connections.origin.destination.country.code,
                                    name: req.body.itinerary.connections.origin.destination.country.name
                                }
                            }
                        },
                        segments: [
                            {
                                type: req.body.itinerary.connections.segments.type,
                                informational: req.body.itinerary.connections.segments.informational,
                                departFrom: {
                                    IATACode: req.body.itinerary.connections.segments.departFrom.IATACode,
                                    name: req.body.itinerary.connections.segments.departFrom.name,
                                    city: {
                                        IATACode: req.body.itinerary.connections.segments.departFrom.city.IATACode,
                                        name: req.body.itinerary.connections.segments.departFrom.city.name,
                                        country: {
                                            code: req.body.itinerary.connections.segments.departFrom.city.country.code,
                                            name: req.body.itinerary.connections.segments.departFrom.city.country.name
                                        }
                                    }
                                },
                                arriveOn: {
                                    IATACode: req.body.itinerary.connections.segments.arriveOn.IATACode,
                                    name: req.body.itinerary.connections.segments.arriveOn.name,
                                    city: {
                                        IATACode: req.body.itinerary.connections.segments.arriveOn.city.IATACode,
                                        name: req.body.itinerary.connections.segments.arriveOn.city.name,
                                        country: {
                                            code: req.body.itinerary.connections.segments.arriveOn.city.country.code,
                                            name: req.body.itinerary.connections.segments.arriveOn.city.country.name
                                        }
                                    }
                                },
                                marketingFlight: {
                                    number: req.body.itinerary.connections.segments.marketingFlight.number,
                                    carrier: {
                                        code: req.body.itinerary.connections.segments.marketingFlight.carrier.code,
                                        name: req.body.itinerary.connections.segments.marketingFlight.carrier.name
                                    },
                                    status: {
                                        code: req.body.itinerary.connections.segments.marketingFlight.status.code,
                                        name: req.body.itinerary.connections.segments.marketingFlight.status.name
                                    },
                                    numberOfStops: req.body.itinerary.connections.segments.marketingFlight.numberOfStops,
                                    operatingFlight: {
                                        number: req.body.itinerary.connections.segments.marketingFlight.operatingFlight.number,
                                        carrier: {
                                            code: req.body.itinerary.connections.segments.marketingFlight.operatingFlight.carrier.code,
                                            name: req.body.itinerary.connections.segments.marketingFlight.operatingFlight.carrier.name
                                        },
                                        duration: req.body.itinerary.connections.segments.marketingFlight.operatingFlight.duration,
                                        flown: req.body.itinerary.connections.segments.marketingFlight.operatingFlight.flown,
                                        checkInStart: req.body.itinerary.connections.segments.marketingFlight.operatingFlight.checkInStart,
                                        localCheckInStart: req.body.itinerary.connections.segments.marketingFlight.operatingFlight.localCheckInStart,
                                        checkInEnd: req.body.itinerary.connections.segments.marketingFlight.operatingFlight.checkInEnd,
                                        localCheckInEnd: req.body.itinerary.connections.segments.marketingFlight.operatingFlight.localCheckInEnd,
                                        scheduledArrival: req.body.itinerary.connections.segments.marketingFlight.operatingFlight.scheduledArrival,
                                        localScheduledArrival: req.body.itinerary.connections.segments.marketingFlight.operatingFlight.localScheduledArrival,
                                        scheduledDeparture: req.body.itinerary.connections.segments.marketingFlight.operatingFlight.scheduledDeparture,
                                        localScheduledDeparture: req.body.itinerary.connections.segments.marketingFlight.operatingFlight.localScheduledDeparture,
                                        arrivalTerminal: {
                                            name: req.body.itinerary.connections.segments.marketingFlight.operatingFlight.arrivalTerminal.name
                                        },
                                        cabin: {
                                            code: req.body.itinerary.connections.segments.marketingFlight.operatingFlight.cabin.code,
                                            name: req.body.itinerary.connections.segments.marketingFlight.operatingFlight.cabin.name
                                        },
                                        equipment: {
                                            code: req.body.itinerary.connections.segments.marketingFlight.operatingFlight.equipment.code,
                                            name: req.body.itinerary.connections.segments.marketingFlight.operatingFlight.equipment.name
                                        }
                                    }
                                }
                            }]
                    }]
            },
                passenger: {
                    firstName: req.passenger.firstName.trim().toUpperCase(),
                    lastName: req.passenger.lastName.trim().toUpperCase(),
                    title: {
                        code: req.passenger.title.code,
                        name: req.passenger.title.name
                    }
                }
            }, function(err) {
                if(err) throw err;
                res.send(req.body);
            })
        } else {
            console.log(req.body);
            var connections = [];
            req.body.itinerary.connections.forEach(el => {
                connections.push(el);
            });
            var newTrip = TripDetails({
                bookingCode: req.body.bookingCode,
                itinerary: {
                    type: req.body.itinerary.type,
                    connections: connections,
                        // [
                        // {
                        //     duration: req.body.itinerary.connections.duration,
                        //     origin: {
                        //         IATACode: req.body.itinerary.connections.origin.IATACode,
                        //         name: req.body.itinerary.connections.origin.name,
                        //         city: {
                        //             IATACode: req.body.itinerary.connections.origin.city.IATACode,
                        //             name: req.body.itinerary.connections.origin.city.name,
                        //             country: {
                        //                 code: req.body.itinerary.connections.origin.city.country.code,
                        //                 name: req.body.itinerary.connections.origin.city.country.name
                        //             }
                        //         }
                        //     },
                        //     destination: {
                        //         IATACode: req.body.itinerary.connections.destination.IATACode,
                        //         name: req.body.itinerary.connections.destination.name,
                        //         city: {
                        //             IATACode: req.body.itinerary.connections.origin.destination.IATACode,
                        //             name: req.body.itinerary.connections.origin.destination.name,
                        //             country: {
                        //                 code: req.body.itinerary.connections.origin.destination.country.code,
                        //                 name: req.body.itinerary.connections.origin.destination.country.name
                        //             }
                        //         }
                        //     },
                        //     segments: [
                        //         {
                        //             type: req.body.itinerary.connections.segments.type,
                        //             informational: req.body.itinerary.connections.segments.informational,
                        //             departFrom: {
                        //                 IATACode: req.body.itinerary.connections.segments.departFrom.IATACode,
                        //                 name: req.body.itinerary.connections.segments.departFrom.name,
                        //                 city: {
                        //                     IATACode: req.body.itinerary.connections.segments.departFrom.city.IATACode,
                        //                     name: req.body.itinerary.connections.segments.departFrom.city.name,
                        //                     country: {
                        //                         code: req.body.itinerary.connections.segments.departFrom.city.country.code,
                        //                         name: req.body.itinerary.connections.segments.departFrom.city.country.name
                        //                     }
                        //                 }
                        //             },
                        //             arriveOn: {
                        //                 IATACode: req.body.itinerary.connections.segments.arriveOn.IATACode,
                        //                 name: req.body.itinerary.connections.segments.arriveOn.name,
                        //                 city: {
                        //                     IATACode: req.body.itinerary.connections.segments.arriveOn.city.IATACode,
                        //                     name: req.body.itinerary.connections.segments.arriveOn.city.name,
                        //                     country: {
                        //                         code: req.body.itinerary.connections.segments.arriveOn.city.country.code,
                        //                         name: req.body.itinerary.connections.segments.arriveOn.city.country.name
                        //                     }
                        //                 }
                        //             },
                        //             marketingFlight: {
                        //                 number: req.body.itinerary.connections.segments.marketingFlight.number,
                        //                 carrier: {
                        //                     code: req.body.itinerary.connections.segments.marketingFlight.carrier.code,
                        //                     name: req.body.itinerary.connections.segments.marketingFlight.carrier.name
                        //                 },
                        //                 status: {
                        //                     code: req.body.itinerary.connections.segments.marketingFlight.status.code,
                        //                     name: req.body.itinerary.connections.segments.marketingFlight.status.name
                        //                 },
                        //                 numberOfStops: req.body.itinerary.connections.segments.marketingFlight.numberOfStops,
                        //                 operatingFlight: {
                        //                     number: req.body.itinerary.connections.segments.marketingFlight.operatingFlight.number,
                        //                     carrier: {
                        //                         code: req.body.itinerary.connections.segments.marketingFlight.operatingFlight.carrier.code,
                        //                         name: req.body.itinerary.connections.segments.marketingFlight.operatingFlight.carrier.name
                        //                     },
                        //                     duration: req.body.itinerary.connections.segments.marketingFlight.operatingFlight.duration,
                        //                     flown: req.body.itinerary.connections.segments.marketingFlight.operatingFlight.flown,
                        //                     checkInStart: req.body.itinerary.connections.segments.marketingFlight.operatingFlight.checkInStart,
                        //                     localCheckInStart: req.body.itinerary.connections.segments.marketingFlight.operatingFlight.localCheckInStart,
                        //                     checkInEnd: req.body.itinerary.connections.segments.marketingFlight.operatingFlight.checkInEnd,
                        //                     localCheckInEnd: req.body.itinerary.connections.segments.marketingFlight.operatingFlight.localCheckInEnd,
                        //                     scheduledArrival: req.body.itinerary.connections.segments.marketingFlight.operatingFlight.scheduledArrival,
                        //                     localScheduledArrival: req.body.itinerary.connections.segments.marketingFlight.operatingFlight.localScheduledArrival,
                        //                     scheduledDeparture: req.body.itinerary.connections.segments.marketingFlight.operatingFlight.scheduledDeparture,
                        //                     localScheduledDeparture: req.body.itinerary.connections.segments.marketingFlight.operatingFlight.localScheduledDeparture,
                        //                     arrivalTerminal: {
                        //                         name: req.body.itinerary.connections.segments.marketingFlight.operatingFlight.arrivalTerminal.name
                        //                     },
                        //                     cabin: {
                        //                         code: req.body.itinerary.connections.segments.marketingFlight.operatingFlight.cabin.code,
                        //                         name: req.body.itinerary.connections.segments.marketingFlight.operatingFlight.cabin.name
                        //                     },
                        //                     equipment: {
                        //                         code: req.body.itinerary.connections.segments.marketingFlight.operatingFlight.equipment.code,
                        //                         name: req.body.itinerary.connections.segments.marketingFlight.operatingFlight.equipment.name
                        //                     }
                        //                 }
                        //             }
                        //         }]
                        // }]
                },
                passenger: {
                    firstName: req.body.passenger.firstName.trim().toUpperCase(),
                    lastName: req.body.passenger.lastName.trim().toUpperCase(),
                    title: {
                        code: req.body.passenger.title.code,
                        name: req.body.passenger.title.name
                    }
                }
            });
            newTrip.save(function(err) {
                if(err) throw err;
                res.send('Success')
            })
        }
    });

    app.get('/api/trip/details/:bookingCode/:familyName', function(req, res) {
        // use mongoose model to find url parameters in document
        TripDetails.findOne({
            bookingCode: req.params.bookingCode
         }.$where('passenger.lastName').equals(req.params.familyName), function(err, details) {
            if(err) throw err;
            res.send(details);
        })
    });
}