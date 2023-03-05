const mongoose = require("mongoose");
const OurClientSchema = mongoose.Schema(
  {
    title: String,
    description: String,
    img: String,
    btname: String,
    visit: String,
  },
  { collection: "OurClients" }
);

OurClientSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

OurClientSchema.set("toJSON", {
  virtuals: true,
});

module.exports = OurClientSchema;
