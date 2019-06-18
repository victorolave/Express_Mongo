const userController = require("../Controllers/user");

module.exports = (app) => {

    app.get("/", (req, res) => {
        res.send("Server in express and mongodb");
    })

    app.get("/users", userController.allUsers);
    app.post("/createUser", userController.createUser);
    app.post("/updateUser", userController.updateUser);
    app.post("/deleteUser", userController.deleteUser);
}