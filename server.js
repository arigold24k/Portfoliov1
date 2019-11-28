var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
const routes = require('./routes/routes');
const PORT = process.env.PORT || 3000;
const app = express();
var path = require("path");
const methodOverride = require('method-override');

// Use morgan logger for logging requests
app.use(logger("dev"));
// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Use express.static to serve the public folder as a static directory
app.use(express.static("public"));

require('./routes/htmlRoutes')(app, path);
app.use("/",routes);

app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
});
