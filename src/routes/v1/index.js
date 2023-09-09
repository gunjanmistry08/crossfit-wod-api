const express = require("express");
const workoutRouter = require("./workoutRoutes")
const router = express.Router();

router.use("/workouts",workoutRouter)

module.exports = router;