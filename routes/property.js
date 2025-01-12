const propertyRouteController = require("../controllers/property");
const express = require("express");

const router = express.Router();

router.post("/create-property", propertyRouteController.createProperty);
router.get("/property/:property_id", propertyRouteController.getProperty);
router.get("/user-properties", propertyRouteController.getPropertiesByUserId);
router.put("/rent-property/:property_id", propertyRouteController.rentProperty);

module.exports = router;
