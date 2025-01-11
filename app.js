const dotenv = require("dotenv");
dotenv.config();

const express = require("express");

// const { createTables } = require("./config/db");
const { syncDatabase } = require("./config/database");
const sequelize = require("./config/database");
const defineAssociations = require("./models_sqlz/associations");

const User = require("./models_sqlz/User");

const app = express();
const port = 3000;

app.use(express.json());

const startServer = async () => {
  // await createTables(); // Inicjalizacja tabel
  defineAssociations();
  syncDatabase();
  app.listen(port, () => {
    console.log(`Server Running on Port ${port}`);
  });
};

startServer();

const inicjalizacjaModelu = async () => {
  const newUser = await User.create({
    first_name: "John",
    last_name: "Doe",
    email: "john.doe@example.com",
    username: "johndoe",
    password: "securepassword123",
    phone_number: "123456789",
    role: "user",
  });
  console.log(newUser);
};

inicjalizacjaModelu();
