const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    address: String,
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    last: String,
    name: String,
    state: String,
});

module.exports = mongoose.model("User", userSchema);    