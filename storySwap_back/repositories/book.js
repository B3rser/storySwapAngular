const Book = require("../models/book");
const ObjectId = require("mongoose").Types.ObjectId

class BookRepository {
    static async getAll(query) {
        return await Book.find(query);
    }

    static async getById(id) {
        if (!ObjectId.isValid(id)) {
            return null;
        }
        return await Book.findOne({ _id: id })
    }

    static async create(BookData) {
        const newBook = new Book(BookData);
        return await newBook.save();
    }

    static async deleteById(id) {
        if (!ObjectId.isValid(id)) {
            return null;
        }
        return await Book.deleteOne({ _id: id })
    }

    static async updateById(id, updateData) {
        if (!ObjectId.isValid(id)) {
            return null;
        }
        return await Book.updateOne({ _id: id }, updateData)
    }

    static async getDistinctGenres() {
        const genres = await Book.distinct('gender');
        return genres;
    };
}

module.exports = { BookRepository }

