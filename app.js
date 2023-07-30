require("dotenv").config();
const express = require("express");
const path = require("path");
const namazTimeRouter = require("./Routes/namazTimeRouter");
const connectToDatabase = require("./Database/Utility_Functions/connectToDatabase");

const port = process.env.port || 8080;

const app = express();

connectToDatabase();

app.use(express.static(path.join(__dirname, "/Public")));
app.use(express.json());
app.use("/api/v1/namazTime", namazTimeRouter);

//these routes handle by client router
app.get("*", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "/Public/index.html"));
});
app.listen(port, () => {
  console.log("server started on port", port);
});
