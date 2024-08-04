const meetingRouteController = require("../controllers/meeting")
const express = require("express")

const router = express.Router();

router.get("/property/:issueId",meetingRouteController.getMeeting)

module.exports = router