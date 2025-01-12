const PropertyService = require("../services/PropertyService");

exports.createProperty = async (req, res) => {
  try {
    const {
      title,
      description,
      city,
      street,
      street_number,
      owner_id,
      tenant_id,
    } = req.body;
    const property = await PropertyService.createProperty(
      title,
      description,
      city,
      street,
      street_number,
      owner_id,
      tenant_id
    );
    console.log("CONTROLLER:" + property);
    res.status(201).json(property);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

exports.getProperty = async (req, res) => {
  try {
    const { propertyId } = req.params;
    const property = await PropertyService.getProperty(propertyId);
    res.status(201).json(property);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

exports.getProperties = async (req, res) => {
  try {
    const { user_id } = req.params;
    const property = await PropertyService.getProperties(user_id);
    res.status(201).json(property);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};
