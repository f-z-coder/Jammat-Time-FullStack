const createNamazTime = require("../../Database/Data_Controllers/NamazTime_Collection/createNamazTime");
async function postNamazTimeHandler(req, res) {
  const place_id = req.params.place_id;
  const namazTimeDetails = req.body.NamazTimeDetails;
  try {
    const createdNamaztime = await createNamazTime(place_id, namazTimeDetails);
    res.status(201).json(createdNamaztime);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
module.exports = postNamazTimeHandler;
