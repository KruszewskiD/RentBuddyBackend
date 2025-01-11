const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Agreement = sequelize.define(
  "Agreement",
  {
    agreement_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    start_date: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    end_date: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    number_of_tenants: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    monthly_payment: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    payment_date: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    deposit: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    aktywna: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    property_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "properties",
        key: "property_id",
      },
    },
    owner_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "users",
        key: "user_id",
      },
    },
    tenant_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "users",
        key: "user_id",
      },
    },
  },
  {
    tableName: "agreements",
    timestamps: false,
  }
);

module.exports = Agreement;
