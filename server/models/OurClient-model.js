const mongoose = require("mongoose");
const OurClientSchema = require("./OurClient-schema");
const OurClientModel = mongoose.model("OurClientModel", OurClientSchema);
module.exports = OurClientModel;
