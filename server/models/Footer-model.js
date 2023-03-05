const mongoose = require("mongoose");
const FooterSchema = require("./Footer-schema");
const FooterModel = mongoose.model("FooterModel", FooterSchema);
module.exports = FooterModel;
