const { Op } = require("sequelize");
const User = require("../models/User");
const UserService = require("./UserService");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserResponseDTO = require("./DTOs/Users/UserResponseDTO");
const SALT_ROUNDS = 10;

class AuthService {
  static async signUp(
    first_name,
    last_name,
    email,
    username,
    password,
    phone_number,
    role
  ) {
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
    const user = await UserService.createUser(
      first_name,
      last_name,
      email,
      username,
      hashedPassword,
      phone_number,
      role
    );
    return user;
  }

  static async login(username, password) {
    const user = await User.findOne({
      where: {
        [Op.or]: [{ email: username }, { username: username }],
      },
    });
    if (!user) throw new Error("Invalid email|username or password");

    // Sprawdzanie poprawności hasła
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) throw new Error("Invalid email|username or password");

    // Generowanie tokenu JWT
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    const userDTO = new UserResponseDTO(user);
    return { userDTO, token };
  }
}

module.exports = AuthService;
