const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT || 3000;
require("./db");
const bodyparser = require("body-parser");
const registration = require("./feature/Registration/registration.controller");
const fcmToken = require("./feature/FcmToken/fcmToken.controller");
const notifications = require("./feature/Notifications/notification");

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.use("/api/registration", registration);
app.use("/api/token", fcmToken);
app.use("/api/notification", notifications);

//Error handling
app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({ error: { message: error.message } });
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.info(`App is listening in http://localhost:${port}`);
});
