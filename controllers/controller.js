const Model = require("../models/model");

module.exports = {
  createUser: function(req, res) {
    res.send("Create a User");
  },
  getAllUsers: function(req, res) {
    res.send("Get All Users");
  },
  getUser: function(req, res) {
    res.send("Get a User");
  },
  updateUser: function(req, res) {
    res.send("Update a User");
  },
  deleteUser: function(req, res) {
    res.send("Delete a User");
  }
}