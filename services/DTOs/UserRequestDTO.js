const Joi = require("joi");

class UserRequestDTO {
  constructor(data) {
    this.first_name = data.first_name;
    this.last_name = data.last_name;
    this.email = data.email;
    this.username = data.username;
    this.password = data.password;
    this.phone_number = data.phone_number;
    this.role = data.role || "user";
  }

  // Metoda walidacji przy użyciu Joi
  static validate(data) {
    const schema = Joi.object({
      first_name: Joi.string().max(100).required(),
      last_name: Joi.string().max(100).required(),
      email: Joi.string().email().max(100).required(),
      username: Joi.string().max(100).required(),
      password: Joi.string().min(6).max(100).required(),
      phone_number: Joi.string().max(20).required(),
      role: Joi.string().valid("user", "admin").default("user"),
    });

    const { error, value } = schema.validate(data);
    if (error) {
      throw new Error(error.details[0].message);
    }

    return new UserRequestDTO(value);
  }
}

module.exports = UserRequestDTO;
