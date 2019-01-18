var express = require('express');
var api = express.Router();

var db = require('../db/utils');

api.get('/songs', function (req, res) {

  var index = isNaN(+req.query.index)&&(+req.query.index > 0) ? 1 : +req.query.index;
  var limit = isNaN(+req.query.limit)&&(+req.query.index > 0) ? 10 : +req.query.limit;

  var response = {
    SINGERS: [],
    GENRES: [],
    YEARS: [],
    SONGS: []
  };

  Promise.all([
    db.getSingersData(),
    db.getGenresData(),
    db.getYearsData(),
    db.getSongsData(index, limit),
    db.getSongsCount()
  ]).then(data => {

    response.SINGERS = data[0];
    response.GENRES = data[1];
    response.YEARS = data[2];
    response.SONGS = data[3];
    response.PAGES = Math.ceil(data[4] / limit);

    res.send(response)
  })
});

module.exports = api;
