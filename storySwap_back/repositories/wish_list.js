const WishList = require("../models/wish_list");
const ObjectId = require("mongoose").Types.ObjectId

class WishListRepository {
    static async getAll(query) {
        return await WishList.find(query);
    }

    static async getById(id) {
        if (!ObjectId.isValid(id)) {
            return null;
        }
        return await WishList.findOne({ _id: id })
    }

    static async create(WishListData) {
        const newWishList = new WishList(WishListData);
        return await newWishList.save();
    }

    static async deleteById(id) {
        if (!ObjectId.isValid(id)) {
            return null;
        }
        return await WishList.deleteOne({ _id: id })
    }

    static async updateById(id, updateData) {
        if (!ObjectId.isValid(id)) {
            return null;
        }
        return await WishList.updateOne({ _id: id }, updateData)
    }
}

module.exports = { WishListRepository }