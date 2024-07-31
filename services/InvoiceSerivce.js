const Invoice = require("../models/Invoice");

class InvoiceSerivce{
    static async createInvoice(amount, senderId, receiverId, propertyId){
        try{
            if (!amount || !senderId || !receiverId || !propertyId) {
                throw new Error("All fields are required");
            }

            const newInvoice = await Invoice.create(amount, senderId, receiverId, propertyId)
            
            return newInvoice
        }catch(error){
            throw new Error(`Error creating invoice: ${error.message}`);
        }
    }
    static async findInvoiceByUserId(user_id){
        try{
            if(!user_id) throw new Error("All fields are required");

            const sendedInvoices = await Invoice.findBySenderId(user_id)
            const recivedInvoices = await Invoice.findByReciverId(user_id)
        
            return{
                sendedInvoices,
                recivedInvoices
            }

        }catch(error){
            
            throw new Error(`Error finding invoices: ${error.message}`);
        
        }

    }
    static updateInvoice(){
        //TODO: Update invoice data in DB
    }
}

module.exports = InvoiceSerivce;