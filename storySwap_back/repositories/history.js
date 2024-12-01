const History = require("../models/history");
const ObjectId = require("mongoose").Types.ObjectId

class HistoryRepository {
    static async getAll() {
        return await History.find();
    }

    static async getById(id) {
        if (!ObjectId.isValid(id)) {
            return null;
        }
        return await History.findOne({ _id: id })
    }

    static async create(HistoryData) {
        const newHistory = new History(HistoryData);
        return await newHistory.save();
    }

    static async deleteById(id) {
        if (!ObjectId.isValid(id)) {
            return null;
        }
        return await History.deleteOne({ _id: id })
    }

    static async updateById(id, updateData) {
        if (!ObjectId.isValid(id)) {
            return null;
        }
        return await History.updateOne({ _id: id }, updateData)
    }
}

module.exports = { HistoryRepository }

