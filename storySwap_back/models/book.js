const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
    author: String,
    title: String,
    description: String,
    gender: String,
    image: String,
    release_date: Number,
    score: Number
})

module.exports = mongoose.model("Book", bookSchema);