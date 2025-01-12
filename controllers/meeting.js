const MeetingService = require("../services/MeetingService");

exports.createMeeting = async (req, res) => {
  try {
    const {
      title,
      description,
      start_time,
      end_time,
      creator_id,
      participant_id,
    } = req.body;
    const meeting = await MeetingService.createMeeting(
      title,
      description,
      start_time,
      end_time,
      creator_id,
      participant_id
    );
    res.status(201).json(meeting);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

exports.updateMeetingStatus = async (req, res) => {
  try {
    const { meeting_id } = req.params;
    const { participant_id, status } = req.body;
    const meeting = await MeetingService.updateMeetingStatus(
      participant_id,
      meeting_id,
      status
    );
    res.status(201).json(meeting);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

exports.getMeetingsByUserId = async (req, res) => {
  try {
    const { user_id } = req.body;
    const meetings = await MeetingService.getMeetingsByUserId(user_id);
    res.status(201).json(meetings);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};
