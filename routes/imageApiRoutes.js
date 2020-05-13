var db = require("../models");
// Create all our routes and set up logic within those routes where required.
module.exports = function(app) {
  app.get("/", function(req, res) {
    db.Image.findAll({
      include: [db.User]
    }).then(function(dbImage) {
      res.render("index", { images: dbImage });
      console.log(db.User);
      console.log(dbImage);
    });
  });

  app.post("/api/images", function(req, res) {
    db.Image.create({
      // eslint-disable-next-line camelcase
      image_url: req.body.image_url
    }).then(function(dbImage) {
      res.json(dbImage);
    });
  });

  app.put("/api/images/:id", function(req, res) {
    // var condition = "id = " + req.params.id;

    // console.log("condition", condition);
    var id = req.params.id;
    console.log(id);
    db.Images.update({
      where: {
        id: id
      }
    }).then(function(dbImage) {
      res.json(dbImage);
    });
  });

  app.delete("/api/images/:id", function(req, res) {
    // var condition = "id = " + req.params.id;
    db.Image.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbImage) {
      res.json(dbImage);
      if (dbImage.affectedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
};
