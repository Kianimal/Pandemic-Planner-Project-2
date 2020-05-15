require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");

var fileUpload = require("express-fileupload");
var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
app.use(fileUpload());

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Routes
// require("./routes/userApiRoutes")(app);
// require("./routes/imageApiRoutes")(app);

// //Beginning to create a var for login below JD//

var login = require('./routes/loginroutes');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(function(req, res, next){
  res.header("Access-Control-Allow-Origin", "*";
  res.header("Access-Control-Allow-Headers", "origin, X-Requested-Width, Content-Type, Accept");
  next();
}); 
//End JD 1st Edits for Routing//
var router = express.Router();

//test route//
router.get('/', function(req, res){
res.json({ message: 'Welcome to our COVID app'});
});

//Route for USer registration//
router.post('/register',login.register);
router.post('/login' login.login)
app.use('/api, router');
app.listen(4000)









require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});



module.exports = app;
