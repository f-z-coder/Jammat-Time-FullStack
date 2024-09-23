require("dotenv").config();
const express = require("express");
const path = require("path");
const namazTimeRouter = require("./Routes/namazTimeRouter");
const connectToDatabase = require("./Database/Utility_Functions/connectToDatabase");

const port = process.env.port || 8080;

const app = express();

connectToDatabase();

app.use(express.json());
app.use("/api/v1/namazTime", namazTimeRouter);

if (process.env.NODE_ENV !== "production") {
  app.listen(port, () => {
    console.log("server started on port", port);
  });
}

module.exports = app;
