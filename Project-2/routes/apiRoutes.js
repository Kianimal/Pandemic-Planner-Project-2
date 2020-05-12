/* eslint-disable indent */
var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.User.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.User.create(req.body).then(function(dbExample) {
      res.json(dbExample);
      console.log(req.body);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
<<<<<<< HEAD
    db.User.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
=======
    db.Example.destroy({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
>>>>>>> a23100d0f5ac5d86655625414da07204d01d2329
      res.json(dbExample);
    });
  });
};
