const mongoose = require("mongoose");
const HomeSchema = mongoose.Schema(
  {
    name: String,
    description: String,
    img: String,
  },
  { collection: "Homes" }
);

HomeSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

HomeSchema.set("toJSON", {
  virtuals: true,
});

module.exports = HomeSchema;
