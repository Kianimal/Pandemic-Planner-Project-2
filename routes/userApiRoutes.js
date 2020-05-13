var db = require("../models");
// Create all our routes and set up logic within those routes where required.
module.exports = function(app) {
  app.get("/", function(req, res) {
    db.User.findAll({
      include: [db.User]
    }).then(function(dbUser) {
      res.render("index", { users: dbUser });
      console.log(dbUser);
    });
  });

  app.post("/api/users/", function(req, res) {
    db.User.create({
      // eslint-disable-next-line camelcase
      user_name: req.body.user_name,
      ImageId: req.body.ImageId
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });
};
