class Invoice{
    constructor(){
        this.id = id;
        this.amount = amount;
        this.status = "created"; // pending https://easydigitaldownloads.com/docs/what-do-the-different-payment-statuses-mean/
        this.senderId = senderId;
        this.receiverId = receiverId;
        this.propertyId = propertyId;
    }
    
    static create(){
        // TODO: Should create Invoince in database
        // TODO: Should contains a info about creator and reciver
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