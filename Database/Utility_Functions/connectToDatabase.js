const Mongoose = require("mongoose");
require("dotenv").config();
async function connectToDatabase() {
  try {
    await Mongoose.connect(process.env.mongodbConnectionString);
    console.log("connection successfull to database");
  } catch (e) {
    console.error("Couldn't connect to Database", e);
  }
}
module.exports = connectToDatabase;
