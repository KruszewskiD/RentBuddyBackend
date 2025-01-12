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
    const { property_id } = req.params;
    const property = await PropertyService.getProperty(property_id);
    res.status(201).json(property);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

exports.getPropertiesByUserId = async (req, res) => {
  try {
    const { user_id } = req.body;
    const property = await PropertyService.getPropertiesByUserId(user_id);
    res.status(201).json(property);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

exports.rentProperty = async (req, res) => {
  try {
    const { property_id } = req.params;
    const { owner_id, tenant_id } = req.body;
    const property = await PropertyService.rentProperty(
      property_id,
      tenant_id,
      owner_id
    );
    res.status(201).json(property);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};
