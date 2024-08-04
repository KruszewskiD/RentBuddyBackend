const userRouteController = require("../controllers/user")
const express = require("express")

const router = express.Router();

router.get("/",userRouteController.getUser)

module.exports = router