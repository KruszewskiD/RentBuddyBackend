const dotenv = require('dotenv')
dotenv.config()

const express = require('express')

const mainRoutes = require("./routes/main")

const app = express()
const port = 3000

app.use(mainRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
