class Property{
    constructor(propertyId,address, ownerId, tenatId=null){
        this.propertyId=propertyId;
        this.address = address;
        this.ownerId = ownerId;
        this.tenatId = tenatId;
    }
    static async create(address, owner_id, tenant_id){
        const result = await pool.query(`
            INSERT 
            INTO properties (address, owner_id, tenant_id) 
            VALUES ($1, $2, $3) RETURNING *
            `, [address, owner_id, tenant_id])
        const responseData = result.rows[0]
        return new Property(responseData.property_id,responseData.address, responseData.owner_id, responseData.tenant_id)
    }
    static async findById(property_id){
        const result = await pool.query(`
            SELECT * FROM properties WHERE property_id=$1
            `, [property_id])
        const responseData= result.rows[0]
        return new Property(responseData.property_id,responseData.address, responseData.owner_id, responseData.tenant_id)
    }
    update(){
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

module.exports = Property;