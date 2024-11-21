const Property = require("../models/Property")
const { pool } = require("../config/db");
const UserService = require("./UserService");

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
            throw new Error(`Error creating property: ${err.message}`);
        }
    }
    static async rentProperty(property_id,tenant_id ){
        try{
            if(!tenant_id&&!property_id){
                throw new Error("Tenant ID and Property ID are required fields!")
            }
            const existingPropertyByPropertyId = await Property.findById(property_id)
            if(!existingPropertyByPropertyId){
                throw new Error("Could not find propety with this propert_id");
            }
            const doesTenatExist = UserService.findById(tenant_id)
            if(!doesTenatExist){
                throw new Error("Could not find propety with this propert_id");
            }
            const rent = existingPropertyByPropertyId.rent(tenant_id)
            return rent

        }catch(err){
            throw new Error(`Error creating property: ${err.message}`);
        }
    }
}

module.exports = PropertyService;