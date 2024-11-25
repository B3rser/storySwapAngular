const RequestSwap = require("../models/request_swap");
const ObjectId = require("mongoose").Types.ObjectId

class RequestSwapRepository {
    static async getAll(query) {
        return await RequestSwap.find(query);
    }

    static async getById(id) {
        if (!ObjectId.isValid(id)) {
            return null;
        }
        return await RequestSwap.findOne({ _id: id })
    }

    static async create(RequestSwapData) {
        const newRequestSwap = new RequestSwap(RequestSwapData);
        return await newRequestSwap.save();
    }

    static async deleteById(id) {
        if (!ObjectId.isValid(id)) {
            return null;
        }
        return await RequestSwap.deleteOne({ _id: id })
    }

    static async updateById(id, updateData) {
        if (!ObjectId.isValid(id)) {
            return null;
        }
        return await RequestSwap.updateOne({ _id: id }, updateData)
    }
}

module.exports = { RequestSwapRepository }

