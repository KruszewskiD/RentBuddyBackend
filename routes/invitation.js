const invitationRouteController = require("../controllers/invitation");
const express = require("express");

const router = express.Router();

router.post("/create-invitation", invitationRouteController.createInvitation);
router.put(
  "/invitation/:invitation_id/status",
  invitationRouteController.changeInvitationStatus
);

router.get(
  "/user-invitations",
  invitationRouteController.getInvitationByUserId
);

module.exports = router;
