class Property{
    constructor(propertyId,address, ownerId, tenatId=null){
        this.propertyId=propertyId;
        this.address = address;
        this.ownerId = ownerId;
        this.tenatId = tenatId;
    }
    static create(){
        // TODO: Create property in database.
    }
    static findById(){
        //TODO: Find and property by propertyId
    }
    upadte(){
        //TODO: Update property data in DB

    }
    rent(tenatId){
        // TODO: Rent flat from owner to tenant
        // TODO: Only owner of particular flat should have ability to rent a flat
    }
    evict(tenatId){
        // TODO: Evict tenat from the flat
        // TODO: Only owner should have ability to evict an tenant
    }
}