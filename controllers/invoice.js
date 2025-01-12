const InvoiceSerivce = require("../services/InvoiceSerivce");

exports.createInvoice = async (req, res) => {
  try {
    const {
      amount,
      sender_id,
      receiver_id,
      property_id,
      payment_deadline,
      invoice_title,
    } = req.body;
    const invoice = await InvoiceSerivce.createInvoice(
      amount,
      sender_id,
      receiver_id,
      property_id,
      payment_deadline,
      invoice_title
    );
    res.status(201).json(invoice);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

exports.updateInvoiceStatus = async (req, res) => {
  try {
    const { invoice_id } = req.params;
    const { receiver_id, status } = req.body;
    const invoice = await InvoiceSerivce.updateInvoiceStatus(
      receiver_id,
      invoice_id,
      status
    );
    res.status(201).json(invoice);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
