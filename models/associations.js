const User = require("./User");
const Property = require("./Property");
const Issue = require("./Issue");
const Invoice = require("./Invoice");
const Meeting = require("./Meeting");
const Agreement = require("./Agreement");

const defineAssociations = () => {
  // Relacje dla User
  User.hasMany(Property, { foreignKey: "owner_id" });
  User.hasMany(Issue, { foreignKey: "creator_id" });
  User.hasMany(Issue, { foreignKey: "resolver_id" });
  User.hasMany(Invoice, { foreignKey: "sender_id" });
  User.hasMany(Invoice, { foreignKey: "receiver_id" });
  User.hasMany(Meeting, { foreignKey: "creator_id" });
  User.hasMany(Meeting, { foreignKey: "participant_id" });
  User.hasMany(Agreement, { foreignKey: "owner_id" });
  User.hasMany(Agreement, { foreignKey: "tenant_id" });

  // Relacje dla Property
  Property.belongsTo(User, { foreignKey: "owner_id" });
  Property.hasMany(Issue, { foreignKey: "property_id" });
  Property.hasMany(Invoice, { foreignKey: "property_id" });
  Property.hasMany(Agreement, { foreignKey: "property_id" });

  // Relacje dla Issue
  Issue.belongsTo(Property, { foreignKey: "property_id" });
  Issue.belongsTo(User, { foreignKey: "creator_id" });
  Issue.belongsTo(User, { foreignKey: "resolver_id" });

  // Relacje dla Invoice
  Invoice.belongsTo(User, { foreignKey: "sender_id" });
  Invoice.belongsTo(User, { foreignKey: "receiver_id" });
  Invoice.belongsTo(Property, { foreignKey: "property_id" });

  // Relacje dla Meeting
  Meeting.belongsTo(User, { foreignKey: "creator_id" });
  Meeting.belongsTo(User, { foreignKey: "participant_id" });

  // Relacje dla Agreement
  Agreement.belongsTo(Property, { foreignKey: "property_id" });
  Agreement.belongsTo(User, { foreignKey: "owner_id" });
  Agreement.belongsTo(User, { foreignKey: "tenant_id" });
};

module.exports = defineAssociations;
