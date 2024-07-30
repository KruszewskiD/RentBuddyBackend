const Invoice = require("../models/Invoice");

class InvoiceSerivce{
    static async createInvoice(amount, senderId, receiverId, propertyId){
        try{
            if (!amount || !senderId || !receiverId || !propertyId) {
                throw new Error("All fields are required");
            }

            const newInvoice = await Invoice.create(amount, senderId, receiverId, propertyId)
            
            return newInvoice
        }catch(err){
            throw new Error(`Error creating invoice: ${error.message}`);
        }
    }
    static findInvoiceByUserId(){
        //TODO: sentInvoices
        //TODO: recivedInvoices
    }
    static sendInvoice(){
        // TODO: Should send invoice from creator to reciver on email?
    }
    static updateInvoice(){
        //TODO: Update invoice data in DB
    }
}

module.exports = InvoiceSerivce;