const mongoose = require("mongoose");
const ServiceSchema = mongoose.Schema(
  {
    title: String,
    description: String,
    img: String,
    btname: String,
    visit: String,
  },
  { collection: "Services" }
);

ServiceSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

ServiceSchema.set("toJSON", {
  virtuals: true,
});

module.exports = ServiceSchema;
