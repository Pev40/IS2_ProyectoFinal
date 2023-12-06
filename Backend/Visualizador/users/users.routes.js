const { signIn } = require("./users.controller");

const router = require("express").Router();

router.post("/signin", signIn);

module.exports = router;
