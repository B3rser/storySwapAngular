const UserBook = require("../models/user_book");
const ObjectId = require("mongoose").Types.ObjectId

class UserBookRepository {
    static async getAll() {
        return await UserBook.find();
    }

    static async getById(id) {
        if (!ObjectId.isValid(id)) {
            return null;
        }
        return await UserBook.findOne({ _id: id })
    }

    static async create(UserBookData) {
        const newUserBook = new UserBook(UserBookData);
        return await newUserBook.save();
    }

    static async deleteById(id) {
        if (!ObjectId.isValid(id)) {
            return null;
        }
        return await UserBook.deleteOne({ _id: id })
    }

    static async updateById(id, updateData) {
        if (!ObjectId.isValid(id)) {
            return null;
        }
        return await UserBook.updateOne({ _id: id }, updateData)
    }
}

module.exports = { UserBookRepository }

