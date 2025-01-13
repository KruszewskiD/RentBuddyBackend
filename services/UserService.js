const User = require("../models/User");
const UserResponseDTO = require("./DTOs/Users/UserResponseDTO");
const { Op } = require("sequelize");

class UserService {
  static async createUser(
    first_name,
    last_name,
    email,
    username,
    password,
    phone_number,
    role = "user"
  ) {
    try {
      const existingUser = await User.findOne({
        where: {
          [Op.or]: [{ email: email }, { username: username }],
        },
      });

      if (existingUser) {
        if (existingUser.email === email) {
          throw new Error("Email already in use");
        } else if (existingUser.username === username) {
          throw new Error(
            "This username is registered in database. Try a different one."
          );
        }
      }

      const newUser = await User.create({
        first_name,
        last_name,
        email,
        username,
        password,
        phone_number,
        role,
      });

      return new UserResponseDTO(newUser);
    } catch (err) {
      throw new Error(err);
    }
  }
  static async getUserById(user_id) {
    if (!user_id) {
      throw new Error("Pass user_id!");
    }
    const existingUserById = await User.findByPk(user_id);
    if (existingUserById === null) return;
    return new UserResponseDTO(existingUserById);
  }
}

module.exports = UserService;
