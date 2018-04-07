var configVal = require('./config');

module.exports = {

    getDbConnectionUrl: function() {
        return 'mongodb://'+ configVal.username + ':' + configVal.password + '@ds211088.mlab.com:11088/trip-finder';
    }
}