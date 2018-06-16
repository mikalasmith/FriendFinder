// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//Sets up the Express app 
var app = express();
var PORT = process.env.PORT || 3000;

//Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);
  

  app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT)
  });

 