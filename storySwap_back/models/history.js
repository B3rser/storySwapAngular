const mongoose = require("mongoose");

const historySchema = mongoose.Schema({
    added_date: { type: Date, default: Date.now },
    id_book1: { type: mongoose.Schema.Types.ObjectId, ref: 'Book' },
    id_book2: { type: mongoose.Schema.Types.ObjectId, ref: 'Book' },
    id_user1: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    id_user2: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    type: String
});

module.exports = mongoose.model("History", historySchema);