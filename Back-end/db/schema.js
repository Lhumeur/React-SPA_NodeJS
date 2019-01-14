var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SingersSchema = new Schema(
  {
    singer: {type: String, require: true}
  }, {
    versionKey: false
  });

var GenresSchema = new Schema(
  {
    genre: {type: String, require: true}
  }, {
    versionKey: false
  });

var YearsSchema = new Schema(
  {
    year: {type: Number, require: true}
  }, {
    versionKey: false
  });

var SongsSchema = new Schema(
  {
    singer: {},
    title: {type: String, require: true},
    genre: {},
    year: {}
  }, {
    versionKey: false
  });

var Singer = mongoose.model('Singer', SingersSchema);
var Genre = mongoose.model('Genre', GenresSchema);
var Song = mongoose.model('Song', SongsSchema);
var Year = mongoose.model('Year', YearsSchema);

module.exports = {
  Singer,
  Genre,
  Song,
  Year
};
