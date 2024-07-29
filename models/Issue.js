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
        const issue= result.rows[0]
        return new Issue(issue.issue_id, issue.property_id, issue.creator_id, issue.resolver_id, issue.description, issue.resolve_status, issue.title)
    }

    static async findById(issue_id){
        const result = await pool.query(`
            SELECT * FROM issues WHERE issue_id=$1
            `, [issue_id])
        const issue= result.rows[0]
        return new Issue(issue.issue_id, issue.property_id, issue.creator_id, issue.resolver_id, issue.description, issue.resolve_status, issue.title)
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

    async update(){
        const result = await pool.query(`
           UPDATE issues 
           SET property_id = $1, creator_id = $2, resolver_id = $3, description = $4, resolve_status = $5, title = $6 
           WHERE user_id = $7 RETURNING *
       `, [this.propertyId, this.creatorId, this.resolverId, this.description, this.resolveStatus, this.title]);
       const issue = result.rows[0];
       return new Issue(issue.issue_id, issue.property_id, issue.creator_id, issue.resolver_id, issue.description, issue.resolve_status, issue.title)
   }
}

module.exports = Issue;

