const router = require("express").Router();
const googleController = require("../../controllers/googlecontroller");

// Matches with "/api/google"
router.route("/").get(googleController.findAll);

module.exports = router;