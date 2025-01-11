class UserResponseDTO {
  constructor(user) {
    this.user_id = user.user_id;
    this.full_name = `${user.first_name} ${user.last_name}`;
    this.email = user.email;
    this.role = user.role;
    this.username = user.username;
  }
}

module.exports = UserResponseDTO;
