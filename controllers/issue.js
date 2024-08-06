const IssueService = require("../services/IssueService")

exports.createIssue = (req, res) => {
    const {amount, senderId, receiverId, propertyId} = req.body;
    IssueService.createIssue(amount, senderId, receiverId, propertyId)
}

exports.getIssue = (req, res) => {
    const {issueId} = req.params;
    IssueService.getIssue(issueId)
}