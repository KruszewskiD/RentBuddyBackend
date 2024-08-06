const invoiceRouteController = require("../controllers/invoice")
const express = require("express")

const router = express.Router();

router.post("/invoice", invoiceRouteController.createInvoice)
router.get("/invoice/:invoiceId",invoiceRouteController.getInvoice)

module.exports = router