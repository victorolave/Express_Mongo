const express = require("express");
const bodyParser = require("body-parser");
const mongo = require("./Database/connectionMongo");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const routeUsers = require("./Routes/user")(app);
mongo.connect(app);