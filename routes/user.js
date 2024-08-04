const userRouteController = require("../controllers/user")
const express = require("express")

const router = express.Router();

router.get("/user/:userId",userRouteController.getUser)

module.exports = router