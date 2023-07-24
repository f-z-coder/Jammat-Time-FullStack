const NamazTimeModel = require("../../Schemas/NamazTimeSchema");
async function updateNamazTime(place_id, namazTimeDetails) {
  const filterObj = { Place_id: place_id };
  const dataToUpdate = { NamazTimeDetails: namazTimeDetails };
  const optionsObj = { returnDocument: "after" };
  const updatedNamazTime = await NamazTimeModel.findOneAndUpdate(
    filterObj,
    dataToUpdate,
    optionsObj
  );
  return updatedNamazTime;
}
module.exports = updateNamazTime;
