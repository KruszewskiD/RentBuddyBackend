const IssueService = require("../services/IssueService")

exports.createIssue = async (req, res) => {
    try{
        const {amount, senderId, receiverId, propertyId} = req.body;
        const issue = await IssueService.createIssue(amount, senderId, receiverId, propertyId)
        res.status(201).json(issue)
    }catch(e){
        res.status(500).json({message: e.message})
    }
}

exports.getIssue = async (req, res) => {
    try{
        const {issueId} = req.params;
        const issue = await IssueService.getIssue(issueId)
        res.status(201).json(issue)
    }catch(e){
        res.status(500).json({message: e.message})
    }
}