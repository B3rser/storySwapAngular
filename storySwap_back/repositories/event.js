const Event = require("../models/event");
const ObjectId = require("mongoose").Types.ObjectId;

class EventRepository {
    static async getAll(query) {
        return await Event.find(query);
    }

    static async getById(id) {
        if (!ObjectId.isValid(id)) {
            return null;
        }
        return await Event.findOne({ _id: id });
    }

    static async create(eventData) {
        const newEvent = new Event(eventData);
        return await newEvent.save();
    }

    static async deleteById(id) {
        if (!ObjectId.isValid(id)) {
            return null;
        }
        return await Event.deleteOne({ _id: id });
    }

    static async updateById(id, updateData) {
        if (!ObjectId.isValid(id)) {
            return null;
        }
        return await Event.updateOne({ _id: id }, updateData);
    }
}

module.exports = { EventRepository };