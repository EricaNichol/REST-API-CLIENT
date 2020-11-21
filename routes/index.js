import DataController from '../services/dataController.js';

var express = require('express');
var fetch = require("node-fetch");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var data = new DataController();
  var user;
  var unique;

  let onGetUniqueOd = data.getUniqueId()
    .then((id) => {
      unique = id;
      data.createUser(unique).then(() => console.log('done'));
    })
    .catch(err => console.warn('getUniqueId', err));

  let onGetAllUser = data.getAllUsers()
    .then((res) => {
      user = res;
    })
    .catch(err => console.warn('getAllUsers', err))

    Promise.all([
      onGetUniqueOd,
      onGetAllUser
    ]).then(() => {
      console.log('getAllUsers', user);
      console.log('getUniqueId', unique);
      res.render('index', { users: user, uniqueId: unique });
    })
});

module.exports = router;
