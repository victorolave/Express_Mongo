const mongo = require("mongoose");

mongo.Promise = global.Promise;

module.exports = {

    connect: async (app) => {
        await mongo.connect("mongodb://'your host'/'your database'", {useNewUrlParser: true});

        app.listen(5000, () => {
            console.log("Connection Complete! (Mongo and Server)");
        })
    }

}