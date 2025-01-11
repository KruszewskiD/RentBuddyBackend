const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "postgres",
    logging: false,
  }
);

const syncDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log("Połączenie z bazą danych zostało nawiązane.");
    await sequelize.sync({ alter: true });
    console.log("Synchronizacja bazy danych zakończona sukcesem.");
  } catch (error) {
    console.error("Błąd podczas synchronizacji bazy danych:", error);
  }
};

module.exports = sequelize;
module.exports.syncDatabase = syncDatabase;
