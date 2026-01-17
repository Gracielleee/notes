// Load environment variables from .env
require("dotenv").config();

// Import dependencies
const createError = require("http-errors"); //  For handling 404 and other errors
const express = require("express"); //  Core Express framework
const path = require("path"); //  For working with file paths
const cookieParser = require("cookie-parser"); //  Parse cookies from requests
const logger = require("morgan"); //  Logs HTTP requests
const mongoose = require("mongoose"); //  MongoDB ODM
const config = require("./config/config"); //  Import MongoDB URI and app config

// Import routes
const notesRouter = require("./routes/notes"); // : All /notes routes handled here

// Create Express app
const app = express();

// ===== Middleware setup =====

//  Log HTTP requests in the console
app.use(logger("dev"));

//  Parse JSON body in requests
app.use(express.json());

//  Parse URL-encoded body (e.g., forms)
app.use(express.urlencoded({ extended: false }));

//  Parse cookies
app.use(cookieParser());

//  Serve static files (images, HTML, CSS) from 'public' folder
app.use(express.static(path.join(__dirname, "public")));

// ===== MongoDB connection =====
mongoose
  .connect(config.mongoUri) //  Connect to MongoDB using URI from config
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// ===== Routes =====
app.use("/notes", notesRouter); //  All /notes endpoints go to notesRouter

// Basic root route
app.get("/", (req, res) => {
  res.send("Notes API is running"); //  Quick test to see if server is running
});

// ===== Error handling =====

//  Catch 404 (page not found) and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

//  Generic error handler
app.use(function (err, req, res, next) {
  // Set locals, only providing error details in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  //  Send error response to client
  res.status(err.status || 500);
  res.send({ message: err.message, error: res.locals.error });
});

// Export app so it can be used by bin/www (server entry point)
module.exports = app;
