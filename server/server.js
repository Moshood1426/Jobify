const express = require("express");
const app = express();
const path = require("path")

require("dotenv").config();
require("express-async-errors");
//setting up server
const connectDB = require("./db/connectDB");
const port = process.env.PORT;

const helmet = require("helmet");
const xss = require("xss-clean");
const mongoSanitize = require("express-mongo-sanitize");

//setting up middleware
const fileupload = require("express-fileupload");
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

const cloudinary = require("cloudinary").v2;
const morgan = require("morgan");

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

app.use(express.json());
app.use(helmet());
app.use(xss());
app.use(mongoSanitize());

app.use(fileupload({useTempFiles: true}));

app.use("/", express.static(path.resolve(__dirname, "../client/build")));

//setting up routes
const authRoute = require("./routes/authRoute");
const jobsRoute = require("./routes/jobsRoute");

app.get("/api/v1", (req, res) => {
  res.json({ msg: "server here" });
});

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/jobs", jobsRoute);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))
})

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log("Server is running on port " + port + "...");
    });
  } catch (error) {
    console.log(error);
  }
};

start();
