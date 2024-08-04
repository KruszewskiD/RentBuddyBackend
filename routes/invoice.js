const invoiceRouteController = require("../controllers/invoice")
const express = require("express")

const router = express.Router();

router.get("/property/:issueId",invoiceRouteController.getInvoice)

module.exports = router