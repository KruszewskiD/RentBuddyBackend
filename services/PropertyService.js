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
      const existingProperty = await Property.findOne({
        where: {
          [Op.and]: {
            city: city,
            street: street,
            street_number: street_number,
          },
        },
      });
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

      return newProperty;
    } catch (err) {
      throw new Error(err);
    }
  }
  static async rentProperty(property_id, tenant_id, owner_id) {
    try {
      //TODO: Dodać walidacje czy istnieją argumenty.
      const rent = await Property.update(
        { tenant_id: tenant_id },
        {
          where: {
            [Op.and]: [{ owner_id: owner_id }, { property_id: property_id }],
          },
          returning: true,
        }
      );

      console.log(rent[1][0].dataValues);
      const responseDTO = new PropertyResponseDTO(rent[1][0].dataValues);
      console.log(responseDTO);
      return responseDTO;
    } catch (err) {
      throw new Error(`Error creating property: ${err.message}`);
    }
  }

  static async getPropertiesByUserId(user_id) {
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

  static async getProperty(property_id) {
    try {
      if (!property_id) {
        throw new Error("There is no property_id passed!");
      }
      const property = await Property.findByPk(property_id);

      return new PropertyResponseDTO(property);
    } catch (err) {
      throw new Error(err);
    }
  }
}

module.exports = PropertyService;
