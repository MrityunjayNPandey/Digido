const mongoose = require("mongoose");
const FooterSchema = mongoose.Schema(
  {
    name: String,
    value: String,
    link: String,
  },
  { collection: "Footers" }
);

FooterSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

FooterSchema.set("toJSON", {
  virtuals: true,
});

module.exports = FooterSchema;
