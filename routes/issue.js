const issueRouteController = require("../controllers/issue")
const express = require("express")

const router = express.Router();

router.get("/property/:issueId",issueRouteController.getIssue)

module.exports = router