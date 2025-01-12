const issueRouteController = require("../controllers/issue");
const express = require("express");

const router = express.Router();

router.post("/issue", issueRouteController.createIssue);
router.put("/issue/:issue_id/status", issueRouteController.updateIssueStatus);
router.get("/user-issues", issueRouteController.getIssuesByUserId);
module.exports = router;
