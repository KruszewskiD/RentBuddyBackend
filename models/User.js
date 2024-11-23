const { pool } = require("../config/db");

class User {
    constructor(userId, firstName, lastName, email, username, password, role) {
        this.userId = userId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.username = username;
        this.password = password;
        this.role = role;
    }
    static async create(first_name, last_name, email, username, password, role) {
        const result = await pool.query(`
            INSERT 
            INTO users (first_name, last_name, email, username, password, role) 
            VALUES ($1, $2, $3, $4, $5, $6) RETURNING *
            `, [first_name, last_name, email, username, password, role])
        const user = result.rows[0]
        return new User(user.user_id, user.first_name, user.last_name, user.email, user.username, user.password, user.role)
    }

    static async findById(user_id) {
        const result = await pool.query(`
            SELECT * FROM users WHERE user_id=$1
            `, [user_id])

        if (result.rows.length === 0) {
            return null;
        }

        const user = result.rows[0]

        return new User(user.user_id, user.first_name, user.last_name, user.email, user.username, user.password, user.role)
    }

    static async findByUsername(username) {
        const result = await pool.query(
            "SELECT * FROM users WHERE username=$1"
            , [username])

        if (result.rows.length === 0) {
            return null
        }

        const user = result.rows[0]

        return new User(user.user_id, user.first_name, user.last_name, user.email, user.username, user.password, user.role)
    }

    async update() {
        const result = await pool.query(`
           UPDATE users 
           SET first_name = $1, last_name = $2, email = $3, username = $4, password = $5, role = $6 
           WHERE user_id = $7 RETURNING *
       `, [this.firstName, this.lastName, this.email, this.username, this.password, this.role, this.userId]);
        const user = result.rows[0];
        return new User(user.user_id, user.first_name, user.last_name, user.email, user.username, user.password, user.role);
    }

}

module.exports = User;