const Property = require("../models/Property");
const { pool } = require("../config/db");
const UserService = require("./UserService");
const { Op } = require("sequelize");
const PropertyResponseDTO = require("./DTOs/Properties/PropertyResponseDTO");

class PropertyService {
  static async createProperty(
    title,
    description,
    city,
    street,
    street_number,
    owner_id,
    tenant_id = null
  ) {
    try {
      console.log(
        "Service:" + title,
        description,
        city,
        street,
        street_number,
        owner_id,
        tenant_id
      );
      const existingProperty = await Property.findOne({
        where: {
          [Op.and]: {
            city: city,
            street: street,
            street_number: street_number,
          },
        },
      });
      console.log("istniejaca:" + existingProperty);
      if (existingProperty) {
        throw new Error("Property already created!");
      }

      const newProperty = await Property.create({
        title,
        description,
        city,
        street,
        street_number,
        owner_id,
        tenant_id,
      });
      console.log(newProperty);
      return newProperty;
    } catch (err) {
      throw new Error(err);
    }
  }
  static async rentProperty(property_id, tenant_id) {
    try {
      if (!tenant_id && !property_id) {
        throw new Error("Tenant ID and Property ID are required fields!");
      }
      const existingPropertyByPropertyId = await Property.findById(property_id);
      if (!existingPropertyByPropertyId) {
        throw new Error("Could not find propety with this propert_id");
      }
      const doesTenatExist = UserService.findById(tenant_id);
      if (!doesTenatExist) {
        throw new Error("Could not find propety with this propert_id");
      }
      const rent = existingPropertyByPropertyId.rent(tenant_id);
      return rent;
    } catch (err) {
      throw new Error(`Error creating property: ${err.message}`);
    }
  }

  static async getProperties(user_id) {
    try {
      if (!user_id) return;
      const userProperties = await Property.findAll({
        where: {
          [Op.or]: [{ owner_id: user_id }, { tenant_id: user_id }],
        },
      });

      return userProperties.map(
        (property) => new PropertyResponseDTO(property)
      );
    } catch (err) {
      throw new Error(err);
    }
  }
}

module.exports = PropertyService;
