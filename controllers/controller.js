const Model = require("../models/model");

module.exports = {
  createUser: async function(req, res) {
    const newUser = new Model(req.body);
    try {
      const user = await newUser.save();
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({message: error.message});
    }
  },
  getAllUsers: async function(req, res) {
    try {
      const users = await Model.find();
      res.status(200).json(users);
    } catch (error) {
      res.status(404).json({message: error.message});
    }
  },
  getUser: async function(req, res) {
    try {
      const user = await Model.findById(req.params.id);
      res.status(200).json(user);
    } catch (error) {
      res.status(404).json({message: error.message});
    }
  },
  updateUser: function(req, res) {
    res.send("Update a User");
  },
  deleteUser: function(req, res) {
    res.send("Delete a User");
  }
}