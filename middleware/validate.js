const Joi = require("joi");

const validateRequest = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body, { abortEarly: false });
    if (error) {
      return res.status(400).json({
        message: "Validation error",
        details: error.details.map((err) => ({
          message: err.message,
          field: err.context.key,
        })),
      });
    }
    next();
  };
};

module.exports = validateRequest;
