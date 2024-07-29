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
    
    static async create(amount, sender_id, receiver_id, property_id){
        const result = await pool.query(`
            INSERT 
            INTO invoices (amount, sender_id, receiver_id, property_id) 
            VALUES ($1, $2, $3, $4) RETURNING *
            `, [amount, sender_id,receiver_id, property_id])
        const invoice = result.rows[0]
        return new Invoice(invoice.invoice_id, invoice.amount, invoice.status, invoice.sender_id, invoice.receiver_id, invoice.property_id, invoice.created_at, invoice.updated_at)
    }

    static async findById(invoice_id){
        const result = await pool.query(`
            SELECT * FROM invoices WHERE invoice_id=$1
            `, [invoice_id])
        const invoice = result.rows[0]
        return new Invoice(invoice.invoice_id, invoice.amount, invoice.status, invoice.sender_id, invoice.receiver_id, invoice.property_id, invoice.created_at, invoice.updated_at)
    }

    static async findBySenderId(sender_id){
        const result = await pool.query(`
            SELECT * FROM invoices WHERE sender_id=$1
            `, [sender_id])
        return result.rows.map((invoice)=>{
            return new Invoice(invoice.invoice_id, invoice.amount, invoice.status, invoice.sender_id, invoice.receiver_id, invoice.property_id, invoice.created_at, invoice.updated_at)    
        })
    }
        

    static async findByReciverId(receiver_id){
        const result = await pool.query(`
            SELECT * FROM invoices WHERE receiver_id=$1
            `, [receiver_id])
        return result.rows.map((invoice)=>{
            return new Invoice(invoice.invoice_id, invoice.amount, invoice.status, invoice.sender_id, invoice.receiver_id, invoice.property_id, invoice.created_at, invoice.updated_at)    
        })
    }
    static async findByPropertyId(property_id){
        const result = await pool.query(`
            SELECT * FROM invoices WHERE property_id=$1
            `, [property_id])
        return result.rows.map((invoice)=>{
            return new Invoice(invoice.invoice_id, invoice.amount, invoice.status, invoice.sender_id, invoice.receiver_id, invoice.property_id, invoice.created_at, invoice.updated_at)    
        })
    }

}

module.exports = Invoice;