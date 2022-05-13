const express = require("express");
const router = express.Router();

router.post("/user", function(req, res) {
  res.send("Create a User");
});
router.get("/users", function(req, res) {
  res.send("Get All Users");
});
router.get("/user/:id", function(req, res) {
  res.send("Get a User");
});
router.put("/user/:id", function(req, res) {
  res.send("Update a User");
});
router.delete("/user/:id", function(req, res) {
  res.send("Delete a User");
});

module.exports = router;