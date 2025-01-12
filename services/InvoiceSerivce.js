const Invoice = require("../models/Invoice");
const { pool } = require("../config/db");
const { Op } = require("sequelize");

class InvoiceSerivce {
  static async createInvoice(
    amount,
    sender_id,
    receiver_id,
    property_id,
    payment_deadline,
    invoice_title
  ) {
    const invoice = await Invoice.create({
      amount,
      sender_id,
      receiver_id,
      property_id,
      payment_deadline,
      invoice_title,
    });
    return invoice;
  }

  static async updateInvoiceStatus(receiver_id, invoice_id, status) {
    if (status !== "confirmed") {
      throw new Error('Invalid status. Use "confirmed"');
    }
    const invoice = await Invoice.findByPk(invoice_id);

    if (invoice.receiver_id !== receiver_id) {
      throw new Error("You are not authorized to update this invoice.");
    }

    if (!invoice) {
      throw new Error("Invoice not found.");
    }

    if (invoice.status !== "Created") {
      throw new Error(
        'Cannot update invoice. Only "Created" invoice can be updated.'
      );
    }
    invoice.updated_at = new Date().toISOString();
    invoice.status = status;
    invoice.save();
    return invoice;
  }

  static async getInvoicesByUserId(user_id) {
    if (!user_id) {
      throw new Error("Missing user_id.");
    }
    const userInvoices = await Invoice.findAll({
      where: {
        [Op.or]: [{ sender_id: user_id }, { receiver_id: user_id }],
      },
    });

    return userInvoices;
  }
}

module.exports = InvoiceSerivce;
