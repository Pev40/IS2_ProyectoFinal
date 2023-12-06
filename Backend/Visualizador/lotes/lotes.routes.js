const { getLotes, updateLotes } = require("./lotes.controller");

const router = require("express").Router();

router.get("/lotes", getLotes);
router.put("/lotes", updateLotes);

module.exports = router;
