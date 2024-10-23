const express = require("express");
const router = express.Router();
const { createAccount, login, resetPassword } = require("../Controllers/auth");

router.post("/createAccount", createAccount);
router.post("/login", login);
router.post("/reset-password", resetPassword);

module.exports = router;