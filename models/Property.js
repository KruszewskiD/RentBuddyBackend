const { pool } = require("../config/db");
class Property{
    constructor(propertyId,address, ownerId, tenantId=null){
        this.propertyId=propertyId;
        this.address = address;
        this.ownerId = ownerId;
        this.tenantId = tenantId;
    }
    static async create(address, owner_id, tenant_id){
        const result = await pool.query(`
            INSERT 
            INTO properties (address, owner_id, tenant_id) 
            VALUES ($1, $2, $3) RETURNING *
            `, [address, owner_id, tenant_id])
        const property = result.rows[0]
        return new Property(property.property_id,property.address, property.owner_id, property.tenant_id)
    }
    static async findById(property_id){
        const result = await pool.query(`
            SELECT * FROM properties WHERE property_id=$1
            `, [property_id])
        const property = result.rows[0]
        return new Property(property.property_id,property.address, property.owner_id, property.tenant_id)
    }

    static async findByOwnerId(owner_id){
        const result = await pool.query(`
            SELECT * FROM properties WHERE owner_id=$1
            `, [owner_id])
        return result.rows.map(property=>{
            return new Property(property.property_id,property.address, property.owner_id, property.tenant_id)
        })
    }


    static async findByTenantId(tenant_id){
        //TODO: Nie znajduje jesli tenant_id = null, powinno zwracac niewynajete mieszkania
        const result = await pool.query(`
            SELECT * FROM properties WHERE tenant_id=$1
            `, [tenant_id])
        return result.rows.map(property=>{
            return new Property(property.property_id,property.address, property.owner_id, property.tenant_id)
        })
    }

    async rent(tenant_id){
        const result = await pool.query(`
            UPDATE properties 
            SET tenant_id=$1
            WHERE property_id = $2 RETURNING *
        `, [tenant_id, this.propertyId]);
        const property = result.rows[0];
        return new Property(property.property_id,property.address, property.owner_id, property.tenant_id)
    }

    async evict(){
        const result = await pool.query(`
            UPDATE properties 
            SET tenant_id=null
            WHERE property_id = $2 AND tenant_id=$1 RETURNING *
        `, [this.tenantId, this.propertyId]);
        const property = result.rows[0];
        return new Property(property.property_id,property.address, property.owner_id, property.tenant_id)
    }
}

module.exports = Property;