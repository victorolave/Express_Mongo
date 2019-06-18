const userModel = require("../Models/user");

module.exports = {
    allUsers: async (req, res) => 
    {
        try 
        {
            const users = await userModel.find();
            res.send(users);
        }
        catch (error) 
        {
            res.status(500).send({ "msg": "FAIL IN SERVER" });
        }
    },
    
    createUser: async (req, res) =>
    {
        try 
        {
            const userData = req.body;
            const user = await userModel.create(userData);
            res.send(user);    
        } 
        catch (error) 
        {
            res.status(500).send({ "msg": "FAIL IN SERVER" });
        }
    },

    updateUser: async (req, res) =>
    {
        try
        {  
            const {id} = req.body;
            const entrada = req.body; 
            const userUpdate = await userModel.findOneAndUpdate({_id: id}, entrada);
            res.send(userUpdate);
        }
        catch(error)
        {
            res.status(500).send({ "msg": "FAIL IN SERVER" });
        }
    },

    deleteUser: async (req, res) =>
    {
        try
        {
            const {id} = req.body;
            const deleteUser = await userModel.findOneAndDelete({_id: id});
            res.send(deleteUser);
        }
        catch (error)
        {
            res.status(500).send({ "msg": "FAIL IN SERVER" });
        }
    }
    
}