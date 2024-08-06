const InvoiceSerivce = require("../services/InvoiceSerivce")

exports.createInvoice = (req, res) => {
    const {amount, senderId, receiverId, propertyId} = req.body;
    InvoiceSerivce.createInvoice(amount, senderId, receiverId, propertyId)
}

exports.getInvoice = (req, res) => {
    res.send('Hello World!')
}