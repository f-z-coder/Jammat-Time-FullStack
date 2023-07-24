const express = require("express");
const namazTimeRouter = require("./Routes/namazTimeRouter");
const cors = require("cors");
const connectToDatabase = require("./Database/Utility_Functions/connectToDatabase");

const app = express();
connectToDatabase();

app.use(cors());
app.use(express.json());
app.use("/api/v1/namazTime", namazTimeRouter);

app.listen(80, () => {
  console.log("server listening");
});
