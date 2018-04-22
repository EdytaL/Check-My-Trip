var configVal = require('./config');

module.exports = {
    dbConnectionUri: process.env.MONGODB_URI || 'mongodb://'+ configVal.username + ':' + configVal.password + '@ds239029.mlab.com:39029/trip-finder',
    serverURL: process.env.SERVER_URL || 'http://localhost:4000'
};
