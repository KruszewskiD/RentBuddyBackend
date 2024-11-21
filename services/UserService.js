const User = require("../models/User")
const { pool } = require("../config/db")


class UserService {
    static async createUser(first_name, last_name, email, username, password, role = "user") {
        try {
            if (!first_name || !last_name || !email || !username || !password || !role) {
                throw new Error("All fields are required");
            }

            const existingUserByEmail = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
            if (existingUserByEmail.rows.length > 0) {
                throw new Error("Email already in use");
            }

            const existingUserByUsername = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
            if (existingUserByUsername.rows.length > 0) {
                throw new Error("Username already in use");
            }

            const newUser = await User.create(first_name, last_name, email, username, password, role)

            return newUser
        } catch (err) {
            console.log(`Error creating user: ${err.message}`);
            return {}
        }
    }
    static async findById(user_id) {
        try {
            if (!user_id) {
                throw new Error("Pass user_id!")
            }
            const existingUserById = await User.findById(user_id)
            if (!existingUserById) {
                throw new Error("Could not find user with this user_id")
            }
            return existingUserById

        } catch (e) {
            throw ("Error:" + e)

        }
    }
}

module.exports = UserService;