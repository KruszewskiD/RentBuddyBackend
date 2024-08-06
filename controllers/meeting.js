const MeetingService = require("../services/MeetingService")

exports.createMeeting = async (req, res) => {
    try{
        const {title, desc, startTime, endTime, creatorId, participantId} = req.body
        const meeting = await MeetingService.createMeeting(title, desc, startTime, endTime, creatorId, participantId)
        res.status(201).json(meeting)
    }catch(e){
        res.status(500).json({message: e.message})
    }
}

exports.getMeeting = async(req, res) => {
    try{
        const {meetingId} = req.params;
        const meeting = await MeetingService.getMeeting(meetingId)
        res.status(201).json(meeting)
    }catch(e){
        res.status(500).json({message: e.message})
    }
}