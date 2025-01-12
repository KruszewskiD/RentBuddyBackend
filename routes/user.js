const userRouteController = require("../controllers/user");
const express = require("express");
const { createUserSchema } = require("../middleware/schemas/userSchema");
const validateRequest = require("../middleware/validate");

const router = express.Router();

router.post(
  "/create-user",
  validateRequest(createUserSchema),
  userRouteController.createUser
);
router.get("/user/:userId", userRouteController.getUser);

module.exports = router;
