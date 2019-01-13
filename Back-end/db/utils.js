var mongoose = require('mongoose');

var model = require('./schema');

module.exports = {
  setUpConnection:
    function setUpConnection() {
      mongoose.Promise = require('bluebird');

      var optios = {
        useNewUrlParser: true
      };

      mongoose.connect(`mongodb://localhost/SongsList`, optios);

      return mongoose.connection;
    },
  getSingersData:
    function () {
      return model.Singer.find({}, function (err) {
        if (err) return console.log(err);
      });
    },
  getSongsData:
    function () {
      return model.Song.find({}, function (err) {
        if (err) return console.log(err);
      });
    },
  getGenresData:
    function () {
      return model.Genre.find({}, function (err) {
        if (err) return console.log(err);
      });
    },
  getYearsData:
    function getYearsData() {
      return model.Year.find({}, function (err) {
        if (err) return console.log(err);
      });
    }
};
