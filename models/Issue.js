class Issue{
    constructor(issueId, propertyId, creatorId, resolverId, description, resolveStatus="open"){
        this.issueId = issueId
        this.propertyId = propertyId;
        this.creatorId = creatorId;
        this.resolverId = resolverId;
        this.description = description;
        this.resolveStatus = resolveStatus;
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