const meetingRouteController = require("../controllers/meeting")
const express = require("express")

const router = express.Router();

router.post("/meeting", meetingRouteController.createMeeting)
router.get("/meeting/:meetingId",meetingRouteController.getMeeting)

module.exports = router