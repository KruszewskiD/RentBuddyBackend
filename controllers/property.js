const PropertyService = require("../services/PropertyService")

exports.createProperty = (req, res) => {
    const {address, ownerId, tenantId} = req.body
    PropertyService.createProperty(address,ownerId,tenantId)
}

exports.getProperty = (req, res) => {
    res.send('Hello World!')
}