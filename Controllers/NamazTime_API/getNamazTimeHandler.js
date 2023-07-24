const getNamazTime = require("../../Database/Data_Controllers/NamazTime_Collection/getNamazTime");
async function getNamazTimeHandler(req, res) {
  const place_id = req.params.place_id;
  try {
    const NamazTimeData = await getNamazTime(place_id);
    res.status(200).json(NamazTimeData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
module.exports = getNamazTimeHandler;
