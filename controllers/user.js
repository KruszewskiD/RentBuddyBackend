const UserService = require("../services/UserService");

exports.createUser = async (req, res) => {
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
    const user = await UserService.createUser(
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

exports.getUser = async (req, res) => {
  try {
    const { user_id } = req.params;
    const user = await UserService.getUserById(user_id);
    res.status(201).json(user);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};
