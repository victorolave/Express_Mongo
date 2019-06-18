const mongo = require("mongoose");

const userScheme = new mongo.Schema({
    name : {type: String},
    area : {type: String}
});

mongo.set('useFindAndModify', false);
module.exports = mongo.model("user", userScheme);