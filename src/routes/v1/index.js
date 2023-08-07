const express = require("express");
const workoutRouter = require("./workoutRoutes")
const router = express.Router();

router.use("/workout",workoutRouter)

module.exports = router;