const meetingRouteController = require("../controllers/meeting");
const express = require("express");

const router = express.Router();

router.post("/meeting", meetingRouteController.createMeeting);
router.put(
  "/meeting/:meeting_id/status",
  meetingRouteController.updateMeetingStatus
);
router.get("/user-meetings", meetingRouteController.getMeetingsByUserId);

module.exports = router;
