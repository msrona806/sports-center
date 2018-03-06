const router = require("express").Router();
const eventsController = require("../../controllers/eventsController");

// Matches with "/api/sharedevents"
router.route("/")
  .get(eventsController.findAllShared)
  .post(eventsController.createShared);
  
  module.exports = router;
  

