var express = require('express');
var api = express.Router();

var db = require('../db/utils');

api.get('/songs', function (req, res) {
  var index = isNaN(+req.query.index) && (+req.query.index > 0) ? 1 : +req.query.index;
  var limit = isNaN(+req.query.limit) && (+req.query.index > 0) ? 10 : +req.query.limit;

  var filters = {SORTING: {"singer": 1}};

  var response = {
    SINGERS: [],
    GENRES: [],
    YEARS: [],
    SONGS: []
  };

  Promise.all([
    db.getSingers(),
    db.getGenres(),
    db.getYears(),
    db.getSongsList(index, limit, filters),
    db.getSongsCount(filters)
  ]).then(data => {
    response.SINGERS = data[0].sort();
    response.GENRES = data[1];
    response.YEARS = data[2].sort(function (a, b) {
      return a - b;
    });
    response.SONGS = data[3];
    response.PAGES = Math.ceil(data[4] / limit);

    res.send(response)
  })
});

api.post('/songs', function (req, res) {

  var index = isNaN(+req.query.index) && (+req.query.index > 0) ? 1 : +req.query.index;
  var limit = isNaN(+req.query.limit) && (+req.query.index > 0) ? 10 : +req.query.limit;

  var filters = {};

  var response = {
    SONGS: []
  };

  Object.keys(req.body).length === 4 ? filters = req.body : filters = {SORTING: {"singer": 1}};

  Promise.all([
    db.getSongsList(index, limit, filters),
    db.getSongsCount(filters)
  ]).then(data => {
    response.SONGS = data[0];
    response.PAGES = Math.ceil(data[1] / limit);

    res.send(response)
  })
});

module.exports = api;
