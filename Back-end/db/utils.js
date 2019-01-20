var mongoose = require('mongoose');

var model = require('./schema');

function getFiltersString(filters) {
  if (Object.keys(filters).length <= 1) {
    return {};
  }

  var filterString = {};

  for (key in filters) {
    if (key === "SINGERS" && filters.SINGERS.length > 0) {
      filterString.singer = {};
      filterString.singer.$in = filters.SINGERS;
    }
    if (key === "GENRES" && filters.GENRES.length > 0) {
      filterString.genre = {};
      filterString.genre.$in = filters.GENRES;
    }
    if (key === "YEARS" && filters.YEARS.length > 0) {
      filterString.year = {};
      filterString.year.$in = filters.YEARS;
    }
  }

  return filterString;
}

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
  getSingers:
    function () {
      return model.distinct("singer", function (err) {
        mongoose.disconnect();

        if (err) return console.log(err);
      });
    },
  getGenres:
    function () {
      return model.distinct("genre", function (err) {
        mongoose.disconnect();

        if (err) return console.log(err);
      });
    },
  getYears:
    function getYearsData() {
      return model.distinct("year", function (err) {
        mongoose.disconnect();

        if (err) return console.log(err);
      });
    },
  getSongsCount:
    function (filters) {
      return model.find(getFiltersString(filters), function (err) {
        mongoose.disconnect();

        if (err) return console.log(err);
      }).countDocuments();
    },
  getSongsList:
    function (index, limit, filters) {
      var offset = --index * limit;

      return model.find(getFiltersString(filters), function (err) {
        mongoose.disconnect();

        if (err) return console.log(err);
      }).skip(offset).limit(limit).sort(filters.SORTING);
    }
};
