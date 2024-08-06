const InvoiceSerivce = require("../services/InvoiceSerivce")

exports.createInvoice = async (req, res) => {
    try{
        const {amount, senderId, receiverId, propertyId} = req.body;
        const invoice = await InvoiceSerivce.createInvoice(amount, senderId, receiverId, propertyId)
        res.status(201).json(invoice)
    }catch(e){
        res.status(500).json({message: e.message})
    }
}

exports.getInvoice = async (req, res) => {
    try{
        const {invoiceId} = req.params;
        const invoice = await InvoiceSerivce.getInvoice(invoiceId);
        res.status(201).json(invoice)
    }catch (e){
        res.status(500).json({message: e.message})
    }
}