const issueRouteController = require("../controllers/issue")
const express = require("express")

const router = express.Router();

router.post("/issue", issueRouteController.createIssue)
router.get("/issue/:issueId",issueRouteController.getIssue)

module.exports = router