const mongoose = require("mongoose");

const wishListSchema = mongoose.Schema({
    add_date: Date,
    id_book: { type: mongoose.Schema.Types.ObjectId, ref: 'Book' },
    id_user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model("WishList", wishListSchema);