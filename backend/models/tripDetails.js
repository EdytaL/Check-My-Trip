const mongoose = require('mongoose');

const codeNamePairSchema = new mongoose.Schema({
    code: String,
    name: String
});

const airportDetailsSchema = new mongoose.Schema({
    IATACode: String,
    name: String,
    country: String,
    city: String
});

const operatingFlightSchema = new mongoose.Schema({
    checkInStart: String,
    localCheckInStart: String,
    checkInEnd: String,
    localCheckInEnd: String,
    scheduledArrival: String,
    localScheduledArrival: String,
    scheduledDeparture: String,
    localScheduledDeparture: String,
    arrivalTerminal: String,
    cabin: codeNamePairSchema,
    equipment: codeNamePairSchema
});

const marketingFlightInfoSchema = new mongoose.Schema({
    number: String,
    carrier: String,
    status: codeNamePairSchema,
    numberOfStops: Number
});

const connectionSchema = new mongoose.Schema({
    duration: String,
    origin: airportDetailsSchema,
    destination: airportDetailsSchema,
    marketingFlightInfo: marketingFlightInfoSchema,
    operatingFlightInfo: operatingFlightSchema
});

const itinerarySchema = new mongoose.Schema({
    type: String,
    connections: [connectionSchema]
});

const passengerSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    title: codeNamePairSchema,
    contactEmail: String
});

const tripDetails = new mongoose.Schema({
    bookingCode: String,
    itinerary: itinerarySchema,
    passenger: passengerSchema
});

const TripDetails = mongoose.model('TripDetails', tripDetails, 'tripdetails');

module.exports = TripDetails;