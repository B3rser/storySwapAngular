const { response, request } = require("express");
const { WishListRepository } = require("../repositories/wish_list");

const getAllWishLists = async (req = request, res = response) => {
    const { searchTerm } = req.query;
    try {
        const result = await WishListRepository.getAll({ name: RegExp(searchTerm) });
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
    const { name, year, episodes, image, description, genre } = req.body;
    const WishListData = { name, year, episodes, image, description, genre }

    if (!name || !year || !episodes || !image || !description || !genre) {
        res.status(400).json({
            msg: "Información Incompleta",
            result: 12345
        });
        return;
    }
    try {
        const savedWishList = await WishListRepository.create(WishListData);
        res.status(200).json(savedWishList);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Error al agregar el nuevo elemento",
            result: 12345
        });
    }
}

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
    getWishListById,
    deleteWishList,
    updateWishList
}