const mongoose = require("mongoose");
const AboutSchema = mongoose.Schema(
  {
    img: String,
    title1: String,
    description1: String,
    title2: String,
    description2: String,
  },
  { collection: "Abouts" }
);

AboutSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

AboutSchema.set("toJSON", {
  virtuals: true,
});

module.exports = AboutSchema;
