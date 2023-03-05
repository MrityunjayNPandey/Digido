const mongoose = require("mongoose");
const PostSchema = mongoose.Schema(
  {
    title: String,
    author: String,
  },
  { collection: "Posts" }
);

PostSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

PostSchema.set("toJSON", {
  virtuals: true,
});

module.exports = PostSchema;
