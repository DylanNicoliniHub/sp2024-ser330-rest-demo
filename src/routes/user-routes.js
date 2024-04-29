const express = require("express");
const router = express.Router();
const controller = require('../controllers/user-controller.js')

  router.post('', function (req, res) {
    controller.createUser(req, res)
  }); 

  // Route to create a new user
  router.get('', (req, res) => {
    controller.getUsers(req, res)
});

module.exports = router;
