class Issue{
    constructor(issueId, title, description, resolveStatus, propertyId, creatorId, resolverId){
        this.issueId = issueId
        this.title = title
        this.description = description;
        this.resolveStatus = resolveStatus;
        this.propertyId = propertyId;
        this.creatorId = creatorId;
        this.resolverId = resolverId;
    }
    static async create( title, desc, property_id, creator_id, resolver_id){
        const result = await pool.query(`
            INSERT 
            INTO issues (property_id, creator_id, resolver_id, description, title) 
            VALUES ($1, $2, $3, $4, $5) RETURNING *
            `, [property_id, creator_id, resolver_id, desc, title])
        const responseData= result.rows[0]
        return new Issue(responseData.issue_id, responseData.property_id, responseData.creator_id, responseData.resolver_id, responseData.description, responseData.resolve_status, responseData.title)
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

module.exports = Issue;