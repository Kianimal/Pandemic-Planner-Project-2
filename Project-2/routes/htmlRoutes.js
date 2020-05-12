var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.User.findAll({}).then(function(dbUser) {
      res.render("index", {
        msg: "HELLO!",
        users: dbUser
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/user/:username", function(req, res) {
    db.User.findOne({ where: { username: req.params.username } }).then(function(
      dbUser
    ) {
      console.log(req.params.username);
      res.render("user", {
        user: dbUser
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
