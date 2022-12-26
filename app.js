const express = require("express");
const app = express();
const cors = require("cors");
const userRouter = require("./routes/userRouter");
const messageRouter = require("./routes/messageRouter");

app.use(
  cors({
    origin: process.env.ORIGIN,
    methods: "GET,POST,PUT,DELETE,PATCH",
    credentials: true,
  })
);
app.use(express.json());

app.use("/api/auth", userRouter);
app.use("/api/messages", messageRouter);

module.exports = app;
