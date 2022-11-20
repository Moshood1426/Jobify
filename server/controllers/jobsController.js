const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors");
const checkPermissions = require("../utils/checkPermissions");
const Job = require("../models/Job");
const { default: mongoose } = require("mongoose");
const moment = require("moment")

const getAllJobs = async (req, res) => {
  const { search, status, jobType, sort, isJobPriority } = req.query;

  const queryObject = {};

  if(isJobPriority) {
    queryObject.isJobPriority = true
  }

  if (search) {
    //const regex = "^[" + search + "][.]*$";
    //const regexExp = new RegExp(regex);
   //console.log(regexExp);
    queryObject.position = { $regex: search, $options: 'i' }
  }

  if (status && status !== "all") {
    queryObject.status = status;
  }
  if (jobType && jobType !== "all") {
    queryObject.jobType = jobType;
  }

  let result = Job.find({ createdBy: req.user.userId, ...queryObject });

  if (sort === "latest") {
    result = result.sort("-createdAt");
  }
  if (sort === "oldest") {
    result = result.sort("createdAt");
  }
  if (sort === "a-z") {
    result = result.sort("position");
  }
  if (sort === "z-a") {
    result = result.sort("-position");
  }

  const allJobs = await result;

  res.status(StatusCodes.OK).json({ count: allJobs.length, jobs: allJobs });
};

const createJob = async (req, res) => {
  const { company, position } = req.body;

  if (!company || !position) {
    throw new BadRequestError("Please input all necessary details");
  }

  req.body.createdBy = req.user.userId;

  const newJob = await Job.create(req.body);
  res
    .status(StatusCodes.CREATED)
    .json({ msg: "New job was succesfully added", job: newJob });
};

const updateJob = async (req, res) => {
  const { id: jobId } = req.params;
  const { userId } = req.user;

  const { company, position } = req.body;
  if (!company || !position) {
    throw new BadRequestError("Please input all necessary details");
  }
  
  const job = await Job.findOne({ _id: jobId });
  if (!job) {
    throw new BadRequestError(`Job with id:${jobId} does not exist`);
  }
  
  checkPermissions(userId, job.createdBy);
  const newJob = await Job.findOneAndUpdate({ _id: jobId }, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(StatusCodes.OK).json({ msg: "Job updated succesfully" });
};

const deleteJob = async (req, res) => {
  const { id: jobId } = req.params;
  const { userId } = req.user;

  const job = await Job.findOne({ _id: jobId });
  if (!job) {
    throw new NotFoundError(`Job with id ${jobId} not found`);
  }

  checkPermissions(userId, job.createdBy);
  const deletedJob = await Job.findOneAndDelete({ _id: jobId });

  res.status(StatusCodes.OK).json({ msg: "Job deleted succesfully" });
};

const showStats = async (req, res) => {
  let stats = await Job.aggregate([
    { $match: { createdBy: mongoose.Types.ObjectId(req.user.userId) } },
    { $group: { _id: "$status", count: { $sum: 1 } } },
  ]);

  stats = stats.reduce((acc, item) => {
    const { _id: title, count } = item;
    acc[title] = count;
    return acc;
  }, {});

  const defaultStats = {
    pending: stats.pending || 0,
    interview: stats.interview || 0,
    declined: stats.declined || 0,
  };

  let monthlyApplications = await Job.aggregate([
    { $match: { createdBy: mongoose.Types.ObjectId(req.user.userId) } },
    {
      $group: {
        _id: {
          year: { $year: "$createdAt" },
          month: { $month: "$createdAt" },
        },
        count: { $sum: 1 },
      },
    },
    { $sort: { "_id.year": -1, "_id.month": -1 } },
    { $limit: 6 },
  ]);
  monthlyApplications = monthlyApplications
    .map((item) => {
      const {
        _id: { year, month },
        count,
      } = item;
      const date = moment()
        .month(month - 1)
        .year(year)
        .format("MMM Y");
      return { date, count };
    })
    .reverse();

  res.status(StatusCodes.OK).json({ defaultStats, monthlyApplications });
};

module.exports = {
  createJob,
  getAllJobs,
  updateJob,
  deleteJob,
  showStats,
};
