const updateNamazTime = require("../../Database/Data_Controllers/NamazTime_Collection/updateNamazTime");
async function patchNamazTimeHandler(req, res) {
  const place_id = req.params.place_id;
  const namazTimeDetails = req.body.NamazTimeDetails;
  try {
    const updatedNamazTime = await updateNamazTime(place_id, namazTimeDetails);
    res.status(202).json(updatedNamazTime);
  } catch (err) {
    res.status(500).json({ Error: err.message });
  }
}
module.exports = patchNamazTimeHandler;
