const mongoose = require("mongoose");
const HomeSchema = require("./Home-schema");
const HomeModel = mongoose.model("HomeModel", HomeSchema);
module.exports = HomeModel;
