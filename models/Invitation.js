const { DataTypes } = require("sequelize");
const sequelize = require("../config/database"); // Upewnij się, że ścieżka do bazy jest poprawna

const Invitation = sequelize.define(
  "Invitation",
  {
    invitation_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    owner_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "users", // Tabela użytkowników
        key: "user_id",
      },
    },
    tenant_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "users", // Tabela użytkowników
        key: "user_id",
      },
    },
    property_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "properties", // Tabela nieruchomości
        key: "property_id",
      },
    },
    status: {
      type: DataTypes.ENUM("pending", "accepted", "rejected"),
      allowNull: false,
      defaultValue: "pending", // Domyślnie zaproszenie jest oczekujące
    },
  },
  {
    tableName: "invitations",
    timestamps: false, // Jeśli nie używasz pól `createdAt` i `updatedAt`
  }
);

module.exports = Invitation;
