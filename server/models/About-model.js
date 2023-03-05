
const mongoose = require("mongoose");
const AboutSchema = require("./About-schema");
const AboutModel = mongoose.model("AboutModel", AboutSchema);
module.exports = AboutModel;
