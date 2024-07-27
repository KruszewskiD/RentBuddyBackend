class Meeting {
    constructor(meetingId, title, description, startTime, endTime, creatorId, participants = []) {
        this.meetingId = meetingId;
        this.title = title;
        this.description = description;
        this.startTime = startTime;
        this.endTime = endTime;
        this.creatorId = creatorId;
        this.participants = participants;
      }
    static create(){
        // TODO: Save meeting to database
    }
    static findById(){
        // TODO: Query DB to recive Meeting by meetingId
    }
    static findByUserId(){
        //TODO: Query DB to recive Meetings Array with meeting data for particular user.
    }
    upadte(){
        //TODO: Update meeting data in DB
    }
}