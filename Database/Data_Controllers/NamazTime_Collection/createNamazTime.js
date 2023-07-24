const NamazTimeModel = require("../../Schemas/NamazTimeSchema");
async function createNamazTime(place_id, namazTimeDetails) {
  const documentToCreate = {
    Place_id: place_id,
    NamazTimeDetails: namazTimeDetails,
  };
  const createdNamaztime = await NamazTimeModel.create(documentToCreate);
  return createdNamaztime;
}
module.exports = createNamazTime;
