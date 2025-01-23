const AuthService = require("../services/AuthService");

exports.signUp = async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      email,
      username,
      password,
      phone_number,
      role,
    } = req.body;
    const user = await AuthService.signUp(
      first_name,
      last_name,
      email,
      username,
      password,
      phone_number,
      role
    );
    res.status(201).json(user);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await AuthService.login(username, password);
    res.status(201).json(user);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};
