var mongoose = require('mongoose');

var model = require('./schema');

module.exports = {
  setUpConnection:
    function setUpConnection() {
      mongoose.Promise = require('bluebird');

      var optios = {
        useNewUrlParser: true
      };

      //mongoose.connect(`mongodb://localhost/SongsList`, optios);
      mongoose.connect(`mongodb+srv://user:user@db-songs-playlist-0srf7.mongodb.net/SongsList?retryWrites=true`, optios);

      return mongoose.connection;
    },
  getSingersData:
    function () {
      return model.Singer.find({}, function (err) {
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
    },
  getSongsCount:
    function () {
      return model.Song.countDocuments({}, function (err) {
        if (err) return console.log(err);
      });
    },
  getSongsData:
    function (index, limit) {
      var offset = --index * limit;

      return model.Song.find({}, function (err) {
        if (err) return console.log(err);
      }).skip(offset).limit(limit);
    }
};
