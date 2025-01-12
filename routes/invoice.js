const invoiceRouteController = require("../controllers/invoice");
const express = require("express");

const router = express.Router();

router.post("/invoice", invoiceRouteController.createInvoice);
router.put(
  "/invoice/:invoice_id/status",
  invoiceRouteController.updateInvoiceStatus
);
router.get("/user-invoices", invoiceRouteController.getInvoicesByUserId);

module.exports = router;
