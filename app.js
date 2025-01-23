const dotenv = require("dotenv");
dotenv.config();

const express = require("express");

const { syncDatabase } = require("./config/database");
const defineAssociations = require("./models/associations");

const userRouter = require("./routes/user");
const propertyRouter = require("./routes/property");
const invitationRouter = require("./routes/invitation");
const invoiceRouter = require("./routes/invoice");
const issueRouter = require("./routes/issue");
const meetingRouter = require("./routes/meeting");
const authenticationRouter = require("./routes/authentication");

const app = express();
const port = 3000;

app.use(express.json());

app.use("/", userRouter);
app.use("/", propertyRouter);
app.use("/", invitationRouter);
app.use("/", invoiceRouter);
app.use("/", issueRouter);
app.use("/", meetingRouter);
app.use("/", authenticationRouter);

const startServer = async () => {
  defineAssociations();
  syncDatabase();
  app.listen(port, () => {
    console.log(`Server Running on Port ${port}`);
  });
};

startServer();
