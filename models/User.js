const { pool } = require("../config/db");

class User{
    constructor(userId,firstName, lastName, email, username, password, role){
        this.userId=userId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.username = username;
        this.password = password;
        this.role = role;
    }
    static async create(first_name, last_name, email, username, password, role){
        const result = await pool.query(`
            INSERT 
            INTO users (first_name, last_name, email, username, password, role) 
            VALUES ($1, $2, $3, $4, $5, $6) RETURNING *
            `, [first_name, last_name, email, username, password, role])
        const responseData = result.rows[0]
        return new User(responseData.user_id, responseData.first_name, responseData.last_name, responseData.email, responseData.username, responseData.password, responseData.role)
    }

    static async findById(user_id){
        const result = await pool.query(`
            SELECT * FROM users WHERE user_id=$1
            `, [property_id])
        const responseData= result.rows[0]
        return new User(responseData.user_id, responseData.first_name, responseData.last_name, responseData.email, responseData.username, responseData.password, responseData.role)
    }

    update(){
        // TODO: Update user data in database
    }
    
}

module.exports = User;