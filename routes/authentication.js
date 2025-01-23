const authenticationRouteController = require("../controllers/authentication");
const express = require("express");
const { createUserSchema } = require("../middleware/schemas/userSchema");
const validateRequest = require("../middleware/validate");

const router = express.Router();

router.post(
  "/signup",
  validateRequest(createUserSchema),
  authenticationRouteController.signUp
);
router.get("/login", authenticationRouteController.login);

module.exports = router;
