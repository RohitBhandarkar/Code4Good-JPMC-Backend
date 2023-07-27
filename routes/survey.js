const express = require("express");
const router = express.Router();

const { funsPost, getAllResponses } = require("../controllers/survey");

router.route("").post(funsPost);
router.route("").get(getAllResponses);

module.exports = router;
