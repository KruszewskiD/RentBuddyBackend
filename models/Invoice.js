const { pool } = require("../config/db");

class Invoice{
    constructor(invoiceId, amount, status="created", senderId,receiverId,propertyId, created_at = new Date(), updated_at=null){
        this.invoiceId = invoiceId;
        this.amount = amount;
        this.status = status; // pending https://easydigitaldownloads.com/docs/what-do-the-different-payment-statuses-mean/
        this.senderId = senderId;
        this.receiverId = receiverId;
        this.propertyId = propertyId;
        this.created_at = created_at
        this.updated_at = updated_at
    }
    
    static create(){
        // TODO: Should create Invoince in database
        // TODO: Should contains a info about creator and reciver
        pool.query("INSERT INTO invoices (invoice_id)")
    }

    static findById(){
        // TODO: Should recive an argument and then return single Invoice from DB

    }

    static findBySenderId(){
        // TODO: Should query database to and return Array of invoices by Sender ID
    }

    static findByReciverId(){
            // TODO: Should query database to and return Array of invoices by Reciver ID
    }
    static findByPropertyId(){
            // TODO: Should query database to and return Array of invoices by Propery ID

    }

}