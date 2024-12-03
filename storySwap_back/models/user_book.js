const mongoose = require("mongoose");

const userBookSchema = mongoose.Schema({
    add_date: { type: Date, default: Date.now },
    condition: String,
    cost: Number,
    id_book: { type: mongoose.Schema.Types.ObjectId, ref: 'Book' },
    id_user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    state: { type: String, default: 'available' }, 
    type: String
});

module.exports = mongoose.model("User_Book", userBookSchema);