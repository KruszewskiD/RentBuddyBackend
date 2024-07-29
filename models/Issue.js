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

    static async findById(issue_id){
        const result = await pool.query(`
            SELECT * FROM issues WHERE issue_id=$1
            `, [issue_id])
        const responseData= result.rows[0]
        return new Issue(responseData.issue_id, responseData.property_id, responseData.creator_id, responseData.resolver_id, responseData.description, responseData.resolve_status, responseData.title)
    }

    static async findByCreatorId(creator_id){
        const result = await pool.query(`
            SELECT * FROM issues WHERE creator_id=$1
            `, [creator_id])
        return result.rows[0].map(issue=>{
            return new Issue(issue.issue_id, issue.property_id, issue.creator_id, issue.resolver_id, issue.description, issue.resolve_status, issue.title)
        })
    }
    static async findByResolverId(resolver_id){
        const result = await pool.query(`
            SELECT * FROM issues WHERE resolver_id=$1
            `, [resolver_id])
        return result.rows[0].map(issue=>{
            return new Issue(issue.issue_id, issue.property_id, issue.creator_id, issue.resolver_id, issue.description, issue.resolve_status, issue.title)
        })
    }
    static async findByPropertyId(property_id){
        const result = await pool.query(`
            SELECT * FROM issues WHERE property_id=$1
            `, [property_id])
        return result.rows[0].map(issue=>{
            return new Issue(issue.issue_id, issue.property_id, issue.creator_id, issue.resolver_id, issue.description, issue.resolve_status, issue.title)
        })
    }

    upadte(){
        //TODO
    }
}

module.exports = Issue;