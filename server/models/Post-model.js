const mongoose = require("mongoose");
const PostSchema = require("./Post-schema");
const PostModel = mongoose.model("PostModel", PostSchema);
module.exports = PostModel;
