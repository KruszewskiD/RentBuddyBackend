const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Issue = sequelize.define(
  "Issue",
  {
    issue_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    property_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "properties",
        key: "property_id",
      },
    },
    creator_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "users",
        key: "user_id",
      },
    },
    resolver_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "users",
        key: "user_id",
      },
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    resolve_status: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: "open",
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
  },
  {
    tableName: "issues",
    timestamps: false,
  }
);

module.exports = Issue;
