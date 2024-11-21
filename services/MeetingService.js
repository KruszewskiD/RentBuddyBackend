const Meeting = require("../models/Meeting")
const { pool } = require("../config/db")

class MeetingService{
    static async createMeeting(title, desc, start_time, end_time, creator_id, participant_id){
        try{
            if (!title || !desc || !start_time || !end_time || !creator_id || !participant_id) {
                throw new Error("All fields are required");
            }

            const newMeeting = await Meeting.create(title, desc, start_time, end_time, creator_id, participant_id)
            
            return newMeeting
        }catch(err){
            throw new Error(`Error creating meeting: ${err.message}`);
        }
    }
}

module.exports = MeetingService;