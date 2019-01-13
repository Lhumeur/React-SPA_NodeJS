var express = require('express');
var router = express.Router();

var db = require('../db/utils');

/* GET listing. */
router.get('/', (req, res) => {
  db.getList().then(data => res.send(data));
});

module.exports = router;
