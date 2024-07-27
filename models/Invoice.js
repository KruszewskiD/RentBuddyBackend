const { pool } = require("../config/db");

class Invoice{
    constructor(invoiceId, amount, status, senderId, receiverId, propertyId, createdAt, updatedAt){
        this.invoiceId = invoiceId;
        this.amount = amount;
        this.status = status; // pending https://easydigitaldownloads.com/docs/what-do-the-different-payment-statuses-mean/
        this.senderId = senderId;
        this.receiverId = receiverId;
        this.propertyId = propertyId;
        this.createdAt = createdAt
        this.updatedAt = updatedAt
    }
    
    static async create(amount, senderId, receiverId, propertyId){
        const result = await pool.query(`
            INSERT 
            INTO invoices (amount, sender_id, receiver_id, property_id) 
            VALUES ($1, $2, $3, $4) RETURNING *
            `, [amount, senderId,receiverId, propertyId])
        const {invoice_id, amount, status, sender_id, receiver_id, property_id, created_at, updated_at} = result.rows[0]
        return new Invoice(invoice_id, amount, status, sender_id, receiver_id, property_id, created_at, updated_at)
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