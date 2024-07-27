
const mainRouteController = require("../controllers/main")
const express = require("express")

const router = express.Router();

router.get("/",mainRouteController.getMainRoute)




module.exports = router