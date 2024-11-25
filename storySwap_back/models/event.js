const mongoose = require("mongoose");

const eventSchema = mongoose.Schema({
    add_date: Date,
    date: Date,
    description: String,
    id_organizer: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    image: String,
    name: String,
    state: String,
    ubication: String
});

module.exports = mongoose.model("Event", eventSchema);
