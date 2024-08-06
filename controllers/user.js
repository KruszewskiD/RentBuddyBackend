const UserService = require("../services/UserService")


exports.createUser = (req, res) => {
    const {firstName, lastName, email, username, password, role} = req.body
    UserService.createUser(firstName, lastName, email, username, password, role)
}

exports.getUser = (req, res) => {
    const {userId} = req.params;
    UserService.getUser(userId)
}