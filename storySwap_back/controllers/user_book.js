const { response, request } = require("express");
const { UserBookRepository } = require("../repositories/user_book");

const getAllUserBooks = async (req = request, res = response) => {
    try {
        const result = await UserBookRepository.getAll();
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: "Error al obtener los datos"
        });
    }
};

const getUserBookById = async (req = request, res = response) => {
    const { id } = req.params;
    try {
        const result = await UserBookRepository.getById(id);
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

const createNewUserBook = async (req = request, res = response) => {
    const { condition, cost, id_book, id_user, state, type } = req.body;
    const userBookData = { condition, cost, id_book, id_user, state, type };

    if (!condition || !cost || !id_book || !id_user || !state || !type) {
        return res.status(400).json({
            msg: "Incomplete information: all fields are required."
        });
    }

    try {
        const savedUserBook = await UserBookRepository.create(userBookData);
        res.status(200).json(savedUserBook);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: "Error adding the new user book"
        });
    }
};


const deleteUserBook = async (req = request, res = response) => {
    const { id } = req.params;
    try {
        const existingUserBook = await UserBookRepository.getById(id);
        if (!existingUserBook) {
            res.status(404).json({ msg: "Elemento no encontrado" });
            return;
        }
        const deletedUserBook = await UserBookRepository.deleteById(id);
        res.status(200).json(deletedUserBook);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Error al eliminar el elemento",
            result: 12345
        });
    }
}

const updateUserBook = async (req = request, res = response) => {
    const { id } = req.params;
    const updateFields = req.body;

    if (Object.keys(updateFields).length === 0) {
        res.status(400).json({ msg: "No se recibieron campos para actualizar" });
        return;
    }

    try {
        const existingUserBook = await UserBookRepository.getById(id);
        if (!existingUserBook) {
            res.status(404).json({ msg: "Elemento no encontrado" });
            return;
        }
        const updatedUserBook = await UserBookRepository.updateById(id, updateFields);
        res.status(200).json(updatedUserBook);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Error al actualizar el nuevo elemento",
            result: 12345
        });
    }
}

module.exports = {
    getAllUserBooks,
    createNewUserBook,
    getUserBookById,
    deleteUserBook,
    updateUserBook
}