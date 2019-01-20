var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SongsSchema = new Schema(
  {
    singer: {type: String},
    title: {type: String, require: true},
    genre: {type: String},
    year: {type: Number}
  }, {
    versionKey: false
  });

var ListOfSongs = mongoose.model('ListOfSong', SongsSchema);

module.exports = ListOfSongs;
