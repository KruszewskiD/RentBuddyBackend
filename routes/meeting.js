const meetingRouteController = require("../controllers/meeting")
const express = require("express")

const router = express.Router();

router.get("/meeting/:meetingId",meetingRouteController.getMeeting)

module.exports = router