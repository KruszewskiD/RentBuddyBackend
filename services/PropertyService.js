const Property = require("../models/Property")

class PropertyService{
    static async createProperty(address, owner_id, tenant_id=null){
        try{
            if (!address || !owner_id) {
                throw new Error("Address and owner_id are required");
            }

            const existingPropertyByAddress = await pool.query('SELECT * FROM properties WHERE address = $1', [address]);
            if (existingPropertyByAddress.rows.length > 0) {
                throw new Error("Address already in use");
            }

            const newProperty = await Property.create(address, owner_id, tenant_id)
            
            return newProperty
        }catch(err){
            throw new Error(`Error creating property: ${error.message}`);
        }
    }
}

module.exports = PropertyService;