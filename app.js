const dotenv = require('dotenv')
dotenv.config()

const express = require('express')

const UserService = require("./services/UserService")
const PropertyService = require('./services/PropertyService')

const { createTables } = require('./config/db')


const app = express()
const port = 3000


const startServer = async () => {
  await createTables(); // Inicjalizacja tabel
  app.listen(port, () => {
    console.log(`Server Running on Port ${port}`)
  })
};

startServer()

UserService.createUser("Aleksandra", "Chomka", "olachomka1@gmail.com", "ola_cho_trn", "Test1234", "user")
// PropertyService.createProperty("Rydygiera 16/1, 87-100 Toruń",1 )
// PropertyService.rentProperty(1,2)
// async function call(){
//   try{
//     console.log(await UserService.findById(33))
//   }catch(err){
//     console.log(err)
//   }
// }
// call()