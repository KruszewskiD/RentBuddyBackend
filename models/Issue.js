class Issue{
    constructor(propertyId, creatorId){
        this.issueId;
        this.propertyId = propertyId;
        this.creatorId = creatorIdId;
        this.resolverId = resolverId;
        this.description = description;
        this.resolveStatus = "open";
    }
    static create(){
        // TODO: Create issue in database.
    }

    static findById(){
        // TODO: Query DB to find user by passed ID Argument
    }
    static findByCreatorId(){
        // TODO: Query DB to find user by passed ID Argument
    }
    static findByResolverId(){
        // TODO: Query DB to find user by passed ID Argument
    }
    static findByPropertyId(){
        // TODO: Query DB to find user by passed ID Argument
    }

    upadte(){
        //TODO: Update issue data in DB
    }
}