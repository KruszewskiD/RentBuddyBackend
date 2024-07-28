class Meeting {
    constructor(meetingId, title, description, startTime, endTime, creatorId, participantId) {
        this.meetingId = meetingId;
        this.title = title;
        this.description = description;
        this.startTime = startTime;
        this.endTime = endTime;
        this.creatorId = creatorId;
        this.participant = participantId;
      }
    static async create(title, desc, start_time, end_time, creator_id, participant_id){
        const result = await pool.query(`
            INSERT 
            INTO meetings (title, description, start_time, end_time, creator_id, participant_id) 
            VALUES ($1, $2, $3, $4, $5, $6) RETURNING *
            `, [title, desc, start_time, end_time, creator_id, participant_id])
        const responseData= result.rows[0]
        return new Meeting(responseData.meeting_id, responseData.title, responseData.description, responseData.start_time, responseData.end_time, responseData.creator_id, responseData.participant_id)
    }
    static async findById(meeting_id){
        const result = await pool.query(`
            SELECT * FROM meetings WHERE meeting_id=$1
            `, [meeting_id])
        const responseData= result.rows[0]
        return new Meeting(responseData.meeting_id, responseData.title, responseData.description, responseData.start_time, responseData.end_time, responseData.creator_id, responseData.participant_id)
    }
    static findByUserId(){
        //TODO: Query DB to recive Meetings Array with meeting data for particular user.
    }
    upadte(){
        //TODO: Update meeting data in DB
 
    }
}

module.exports = Meeting;