var mongoose = require('mongoose');

var songsSchema = require('./schema');

module.exports = {
  setUpConnection:
    function setUpConnection() {
      mongoose.Promise = require('bluebird');

      var optios = {
        useNewUrlParser: true
      };

      mongoose.connect(`mongodb://localhost/SongsList`, optios);

      return mongoose.connection;
    }
};
