const Joi = require("joi");

class CreateUserRequestDTO {
  constructor(data) {
    this.first_name = data.first_name;
    this.last_name = data.last_name;
    this.email = data.email;
    this.username = data.username;
    this.password = data.password;
    this.phone_number = data.phone_number;
    this.role = data.role || "user";
  }
}

module.exports = CreateUserRequestDTO;
