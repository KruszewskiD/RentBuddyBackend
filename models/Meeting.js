class Meeting {
    constructor(meetingId, title, description, startTime, endTime, creatorId, participantId) {
        this.meetingId = meetingId;
        this.title = title;
        this.description = description;
        this.startTime = startTime;
        this.endTime = endTime;
        this.creatorId = creatorId;
        this.participantId = participantId;
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
    static async findByUserId(creator_id, participant_id){
        const result = await pool.query(`
            SELECT * FROM meetings WHERE creator_id=$1 OR participant_id=$2
            `, [creator_id, participant_id])
        const responseData= result.rows[0]
        // TODO: Przerobić to na map, poniewa moze zwracac tablice spotkan dla danego uzytkownika
        return new Meeting(responseData.meeting_id, responseData.title, responseData.description, responseData.start_time, responseData.end_time, responseData.creator_id, responseData.participant_id)
    }
    async update(){
        const result = await pool.query(`
           UPDATE meetings 
           SET title = $1, description = $2, start_time = $3, end_time = $4, participant_id = $5
           WHERE meeting_id = $6 RETURNING *
       `, [this.title, this.description, this.startTime, this.endTime, this.participantId, this.meetingId ]);
       const responseData = result.rows[0];
       return new Meeting(responseData.meeting_id, responseData.title, responseData.description, responseData.start_time, responseData.end_time, responseData.creator_id, responseData.participant_id)
   }
}

module.exports = Meeting;