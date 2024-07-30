const User = require("../models/User")

class UserService{
    static async createUser(first_name, last_name, email, username, password, role="user"){
        try{
            if (!firstName || !lastName || !email || !username || !password || !role) {
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
        }catch(err){
            throw new Error(`Error creating user: ${error.message}`);
        }
    }
}

module.exports = UserService;