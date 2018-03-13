const router = require("express").Router();
const eventRoutes = require("./events");
const userRoutes = require("./auth");
const sharedRoutes = require("./sharedevents");

// Event routes
router.use("/events", eventRoutes);
router.use("/signup", userRoutes);
router.use("/sharedevents", sharedRoutes);

module.exports = router;