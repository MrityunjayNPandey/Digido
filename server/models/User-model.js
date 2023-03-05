const mongoose = require("mongoose");
const UserSchema = require("./User-schema");
const UserModel = mongoose.model("UserModel", UserSchema);
module.exports = UserModel;
