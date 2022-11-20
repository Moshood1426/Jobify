const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");

const {
  createJob,
  getAllJobs,
  updateJob,
  deleteJob,
  showStats
} = require("../controllers/jobsController");

router
  .route("/")
  .get(authMiddleware, getAllJobs)
  .post(authMiddleware, createJob);
router
  .route("/:id")
  .patch(authMiddleware, updateJob)
  .delete(authMiddleware, deleteJob);
router.route("/stats").get(authMiddleware, showStats)

module.exports = router;
