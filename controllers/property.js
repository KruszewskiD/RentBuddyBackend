const PropertyService = require("../services/PropertyService")

exports.createProperty = async (req, res) => {
    try{
        const {address, ownerId, tenantId} = req.body
        const property = await PropertyService.createProperty(address,ownerId,tenantId)
        res.status(201).json(property)
    }catch(e){
        res.status(500).json({message: e.message})
    }
}

exports.getProperty = async (req, res) => {
    try{
        const {propertyId} = req.params;
        const property = await PropertyService.getProperty(propertyId)
        res.status(201).json(property)
    }catch(e){
        res.status(500).json({message: e.message})
    }
}