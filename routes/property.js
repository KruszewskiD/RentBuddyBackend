const propertyRouteController = require("../controllers/property")
const express = require("express")

const router = express.Router();

router.get("/property/:propertyId",propertyRouteController.getProperty)

module.exports = router