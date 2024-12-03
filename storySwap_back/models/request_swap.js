const mongoose = require("mongoose");

const requestSwapSchema = mongoose.Schema({
    book1: { type: mongoose.Schema.Types.ObjectId, ref: 'Book' },
    book2: { type: mongoose.Schema.Types.ObjectId, ref: 'Book' },
    date1: { type: Date, default: Date.now },
    date2: { type: Date, default: Date.now },
    date3: { type: Date, default: Date.now },
    state: { type: String, default: 'pending' },
    type: { type: String, default: 'swap' },
    user1: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    user2: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model("Request_Swap", requestSwapSchema);