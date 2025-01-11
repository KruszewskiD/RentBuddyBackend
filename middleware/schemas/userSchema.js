const Joi = require("joi");

// Schemat do tworzenia użytkownika
const createUserSchema = Joi.object({
  first_name: Joi.string().max(100).required(),
  last_name: Joi.string().max(100).required(),
  email: Joi.string().email().max(100).required(),
  username: Joi.string().max(100).required(),
  password: Joi.string().min(6).max(100).required(),
  phone_number: Joi.string().max(20).required(),
  role: Joi.string().max(50).valid("admin", "user", "moderator").required(),
});

// Schemat do aktualizacji użytkownika
const updateUserSchema = Joi.object({
  first_name: Joi.string().max(100).optional(),
  last_name: Joi.string().max(100).optional(),
  email: Joi.string().email().max(100).optional(),
  username: Joi.string().max(100).optional(),
  password: Joi.string().min(6).max(100).optional(),
  phone_number: Joi.string().max(20).optional(),
  role: Joi.string().max(50).valid("admin", "user", "moderator").optional(),
}).min(1); // Wymaga co najmniej jednego pola do aktualizacji

// Eksport schematów
module.exports = {
  createUserSchema,
  updateUserSchema,
};
