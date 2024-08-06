const MeetingService = require("../services/MeetingService")

exports.createMeeting = (req, res) => {
    const {title, desc, startTime, endTime, creatorId, participantId} = req.body
    MeetingService.createMeeting(title, desc, startTime, endTime, creatorId, participantId)
}

exports.getMeeting = (req, res) => {
    res.send('Hello World!')
}