const propertyRouteController = require("../controllers/property");
const express = require("express");

const router = express.Router();

router.post("/property", propertyRouteController.createProperty);
router.get("/property/:propertyId", propertyRouteController.getProperty);
router.get("/properties", propertyRouteController.getProperties);

module.exports = router;
