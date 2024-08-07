const dotenv = require('dotenv')
dotenv.config()

const express = require('express')

const mainRoutes = require("./routes/main")
const { createTables } = require('./config/db')


const app = express()
const port = 3000

app.use(mainRoutes)

const startServer = async () => {
  await createTables(); // Inicjalizacja tabel
  app.listen(port, () => {
    console.log(`Example running port ${port}`)
  })  
};

startServer()


