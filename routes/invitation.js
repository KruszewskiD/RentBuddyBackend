const invitationRouteController = require("../controllers/invitation");
const express = require("express");

const router = express.Router();

router.post("/create-invitation", invitationRouteController.createInvitation);

module.exports = router;
