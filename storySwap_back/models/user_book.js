const mongoose = require("mongoose");

const userBookSchema = mongoose.Schema({
    add_date: Date,
    condition: String,
    cost: Number,
    id_book: { type: mongoose.Schema.Types.ObjectId, ref: 'Book' },
    id_user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    state: String,
    type: String
});

module.exports = mongoose.model("UserBook", userBookSchema);