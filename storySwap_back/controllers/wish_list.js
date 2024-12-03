const { response, request } = require("express");
const { WishListRepository } = require("../repositories/wish_list");

const getAllWishLists = async (req = request, res = response) => {
    const queryFilters = {};
    const { bookId, userId } = req.query;

    if (bookId) {
        queryFilters.book = bookId;
    }
    if (userId) {
        queryFilters.user = userId;
    }

    try {
        const result = await WishListRepository.getAll(queryFilters);
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: "Error al obtener los datos"
        });
    }
};


const getWishListByUserBook = async (req = request, res = response) => {
    const { user, book } = req.params;

    console.log(user, book)
    try {
        const result = await WishListRepository.getByUserBook(user, book);
        if (result === null) {
            res.status(404).json({
                msg: "No se encontro el wish item   "
            })
            return;
        }
        console.log(result)
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Error al obtener los datos"
        })
    }
}

const getWishListById = async (req = request, res = response) => {
    const { id } = req.params;
    try {
        const result = await WishListRepository.getById(id);
        if (result === null) {
            res.status(404).json({
                msg: "No se encontró el programa de televisión"
            })
            return;
        }
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Error al obtener los datos"
        })
    }
}

const createNewWishList = async (req = request, res = response) => {
    const { book, user } = req.body;
    const wishListData = { book, user };

    if (!book || !user) {
        return res.status(400).json({
            msg: "Incomplete information: book and user are required."
        });
    }

    try {
        const savedWishList = await WishListRepository.create(wishListData);
        console.log(savedWishList)
        res.status(200).json(savedWishList);
        return savedWishList;
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: "Error adding the new wishlist item"
        });
        return null;
    }
};

const deleteWishList = async (req = request, res = response) => {
    const { id } = req.params;
    try {
        const existingWishList = await WishListRepository.getById(id);
        if (!existingWishList) {
            res.status(404).json({ msg: "Elemento no encontrado" });
            return;
        }
        const deletedWishList = await WishListRepository.deleteById(id);
        res.status(200).json(deletedWishList);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Error al eliminar el elemento",
            result: 12345
        });
    }
}

const updateWishList = async (req = request, res = response) => {
    const { id } = req.params;
    const updateFields = req.body;

    if (Object.keys(updateFields).length === 0) {
        res.status(400).json({ msg: "No se recibieron campos para actualizar" });
        return;
    }

    try {
        const existingWishList = await WishListRepository.getById(id);
        if (!existingWishList) {
            res.status(404).json({ msg: "Elemento no encontrado" });
            return;
        }
        const updatedWishList = await WishListRepository.updateById(id, updateFields);
        res.status(200).json(updatedWishList);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Error al actualizar el nuevo elemento",
            result: 12345
        });
    }
}

module.exports = {
    getAllWishLists,
    createNewWishList,
    getWishListByUserBook,
    getWishListById,
    deleteWishList,
    updateWishList
}