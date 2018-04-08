var configVal = require('./config');

module.exports = {

    getDbConnectionUrl: function() {
        return 'mongodb://'+ configVal.username + ':' + configVal.password + '@ds239029.mlab.com:39029/trip-finder';
    }
};