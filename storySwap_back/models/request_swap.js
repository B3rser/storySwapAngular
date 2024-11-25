const mongoose = require("mongoose");

const requestSwapSchema = mongoose.Schema({
    book1: { type: mongoose.Schema.Types.ObjectId, ref: 'Book' },
    book2: { type: mongoose.Schema.Types.ObjectId, ref: 'Book' },
    date1: Date,
    date2: Date,
    date3: Date,
    state: String,
    type: String,
    user1: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    user2: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model("RequestSwap", requestSwapSchema);