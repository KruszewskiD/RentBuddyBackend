const dotenv = require("dotenv");
dotenv.config();

const express = require("express");

// const { createTables } = require("./config/db");
const { syncDatabase } = require("./config/database");
const defineAssociations = require("./models/associations");

const userRouter = require("./routes/user");
const propertyRouter = require("./routes/property");

const app = express();
const port = 3000;

app.use(express.json());

app.use("/", userRouter);
app.use("/", propertyRouter);

const startServer = async () => {
  // await createTables(); // Inicjalizacja tabel
  defineAssociations();
  syncDatabase();
  app.listen(port, () => {
    console.log(`Server Running on Port ${port}`);
  });
};

startServer();
