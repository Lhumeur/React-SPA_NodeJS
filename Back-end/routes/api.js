var express = require('express');
var api = express.Router();

var db = require('../db/utils');

api.get('/singers', function(req, res) {
  db.getSingersData().then(data => res.send(data));
});

api.get('/songs', function(req, res) {
  db.getSongsData().then(data => res.send(data));
});

api.get('/genres', function(req, res) {
  db.getGenresData().then(data => res.send(data));
});

api.get('/years', function(req, res) {
  db.getYearsData().then(data => res.send(data));
});



module.exports = api;
