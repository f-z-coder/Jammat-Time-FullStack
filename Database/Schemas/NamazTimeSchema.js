const Mongoose = require("mongoose");
const NamazTimeSchema = new Mongoose.Schema({
  Place_id: {
    type: "string",
    unique: true,
    required: [true, "Place_id is required"],
  },
  NamazTimeDetails: {
    type: [{ Namaz: "string", AzanTime: "string", NamazTime: "string" }],
  },
});

const NamazTimeModel = new Mongoose.model("NamazTime", NamazTimeSchema);

module.exports = NamazTimeModel;
