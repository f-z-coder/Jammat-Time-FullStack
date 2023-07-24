const Express = require("express");
const getNamazTimeHandler = require("../Controllers/NamazTime_API/getNamazTimeHandler");
const postNamazTimeHandler = require("../Controllers/NamazTime_API/postNamazTimeHandler");
const patchNamazTimeHandler = require("../Controllers/NamazTime_API/patchNamazTimeHandler");

const namazTimeRouter = Express.Router();
//endpoint routes for /api/v1//namazTime
namazTimeRouter.get("/:place_id", getNamazTimeHandler);
namazTimeRouter.post("/:place_id", postNamazTimeHandler);
namazTimeRouter.patch("/:place_id", patchNamazTimeHandler);

module.exports = namazTimeRouter;
