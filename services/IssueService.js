const Issue = require("../models/Issue")
const { pool } = require("../config/db")

class IssueService{
    static async createIssue(title, desc, property_id, creator_id, resolver_id){
        try{
            if (!title || !desc || !property_id || !creator_id || !resolver_id) {
                throw new Error("All fields are required");
            }

            const newIssue = await Issue.create(title, desc, property_id, creator_id, resolver_id)
            
            return newIssue
        }catch(err){
            throw new Error(`Error creating meeting: "${err.message}"`);
        }
    }
}

module.exports = IssueService;