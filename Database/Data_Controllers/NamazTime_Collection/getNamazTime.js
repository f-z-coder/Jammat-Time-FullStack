const NamazTimeModel = require("../../Schemas/NamazTimeSchema");
async function getNamazTime(place_id) {
  const filterObj = {
    Place_id: place_id,
  };
  const NamazTimeData = await NamazTimeModel.findOne(filterObj).lean();
  return NamazTimeData;
}

module.exports = getNamazTime;
