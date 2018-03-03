const router = require("express").Router();
const eventRoutes = require("./events");
const userRoutes = require("./auth");

// Event routes
router.use("/events", eventRoutes);
router.use("/signup", userRoutes);

module.exports = router;