const recordService = require("../services/recordService");
const getRecordForWorkout = (req, res) => {
  const {
    params: { workoutId },
  } = req;
  if (!workoutId) {
    res.status(400).send({
      status: "FAILED",
      data: { error: "Parameter ':workoutId' can not be empty" },
    });
  }
  try {
    const recordWorkout = recordService.getRecordForWorkout(workoutId);
    res.status(200).send({ status: "OK", data: recordWorkout });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};
module.exports = {
  getRecordForWorkout,
};
