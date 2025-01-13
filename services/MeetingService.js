const Meeting = require("../models/Meeting");
const { Op } = require("sequelize");

class MeetingService {
  static async createMeeting(
    title,
    description,
    start_time,
    end_time,
    creator_id,
    participant_id
  ) {
    const meeting = await Meeting.create({
      title,
      description,
      start_time,
      end_time,
      creator_id,
      participant_id,
    });
    return meeting;
  }

  static async updateMeetingStatus(participant_id, meeting_id, status) {
    if (!["accepted", "rejected"].includes(status)) {
      throw new Error('Invalid status. Use "accepted" or "rejected"');
    }
    const meeting = await Meeting.findByPk(meeting_id);

    if (meeting.participant_id !== participant_id) {
      throw new Error("You are not authorized to update this meeting.");
    }

    if (!meeting) {
      throw new Error("Meeting not found.");
    }

    if (meeting.status !== "pending") {
      throw new Error(
        'Cannot update meeting. Only "pending" meeting can be updated.'
      );
    }
    meeting.status = status;
    meeting.save();
    return meeting;
  }

  static async getMeetingsByUserId(user_id) {
    if (!user_id) {
      throw new Error("Missing user_id.");
    }
    const userMeetings = await Meeting.findAll({
      where: {
        [Op.or]: [{ creator_id: user_id }, { participant_id: user_id }],
      },
    });

    return userMeetings;
  }
}

module.exports = MeetingService;
