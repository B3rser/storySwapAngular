const User = require("../models/user");
const ObjectId = require("mongoose").Types.ObjectId

class UserRepository {
    static async getAll(query) {
        return await User.find(query);
    }

    static async getById(id) {
        if (!ObjectId.isValid(id)) {
            return null;
        }
        return await User.findOne({ _id: id })
    }

    static async create(UserData) {
        const newUser = new User(UserData);
        return await newUser.save();
    }

    static async deleteById(id) {
        if (!ObjectId.isValid(id)) {
            return null;
        }
        return await User.deleteOne({ _id: id })
    }

    static async updateById(id, updateData) {
        if (!ObjectId.isValid(id)) {
            return null;
        }
        return await User.updateOne({ _id: id }, updateData)
    }
}

module.exports = { UserRepository }

