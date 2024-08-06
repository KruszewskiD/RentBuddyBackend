const UserService = require("../services/UserService")


exports.createUser = async (req, res) => {
    try{
    const {firstName, lastName, email, username, password, role} = req.body
    const user = await UserService.createUser(firstName, lastName, email, username, password, role)
    res.status(201).json(user)
    } catch(e){
        res.status(500).json({message: e.message})
    }
}

exports.getUser = async (req, res) => {
    try{
        const {userId} = req.params;
        const user = await UserService.getUser(userId)
        res.status(201).json(user)
    } catch(e){
        res.status(500).json({message: e.message})
    }
}