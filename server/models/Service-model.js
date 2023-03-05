const mongoose = require("mongoose");
const ServiceSchema = require("./Service-schema");
const ServiceModel = mongoose.model("ServiceModel", ServiceSchema);
module.exports = ServiceModel;
