const mongoose = require("mongoose");

const wishListSchema = mongoose.Schema({
    add_date: { type: Date, default: Date.now },
    book: { type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User',  required: true }
});

module.exports = mongoose.model("Wish_List", wishListSchema);