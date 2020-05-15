var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("profile");
    // db.User.findAll({}).then(function(dbUser) {
    //   res.render("index", {
    //     msg: "HELLO!",
    //     users: dbUser
    //   });
    // });
  });

  // Load user page and pass in a user by username
  app.get("/users/:username", function(req, res) {
    db.User.findOne({ where: { username: req.params.username } }).then(function(
      dbUser
    ) {
      res.render("user", {
        user: dbUser
      });
    });
  });

  app.get("/profile", function(req, res) {
    res.render("profile");
  });

  app.get("/signin", function(req, res) {
    res.render("signin");
  });

  app.get("/signup", function(req, res) {
    res.render("signup");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
