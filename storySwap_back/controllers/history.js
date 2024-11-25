const { response, request } = require("express");
const { HistoryRepository } = require("../repositories/history");

const getAllHistorys = async (req = request, res = response) => {
    const { searchTerm } = req.query;
    try {
        const result = await HistoryRepository.getAll({ name: RegExp(searchTerm) }); 
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Error al obtener los datos"
        })
    }
}

const getHistoryById = async (req = request, res = response) => {
    const { id } = req.params;
    try {
        const result = await HistoryRepository.getById(id);
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

const createNewHistory = async (req = request, res = response) => {
    const { name, year, episodes, image, description, genre } = req.body;
    const HistoryData = { name, year, episodes, image, description, genre }

    if (!name || !year || !episodes || !image || !description || !genre) {
        res.status(400).json({
            msg: "Información Incompleta",
            result: 12345
        });
        return;
    }
    try {
        const savedHistory = await HistoryRepository.create(HistoryData);
        res.status(200).json(savedHistory);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Error al agregar el nuevo elemento",
            result: 12345
        });
    }
}

const deleteHistory = async (req = request, res = response) => {
    const { id } = req.params;
    try {
        const existingHistory = await HistoryRepository.getById(id);
        if (!existingHistory) {
            res.status(404).json({ msg: "Elemento no encontrado" });
            return;
        }
        const deletedHistory = await HistoryRepository.deleteById(id);
        res.status(200).json(deletedHistory);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Error al eliminar el elemento",
            result: 12345
        });
    }
}

const updateHistory = async (req = request, res = response) => {
    const { id } = req.params;
    const updateFields = req.body;

    if (Object.keys(updateFields).length === 0) {
        res.status(400).json({ msg: "No se recibieron campos para actualizar" });
        return;
    }

    try {
        const existingHistory = await HistoryRepository.getById(id);
        if (!existingHistory) {
            res.status(404).json({ msg: "Elemento no encontrado" });
            return;
        }
        const updatedHistory = await HistoryRepository.updateById(id, updateFields);
        res.status(200).json(updatedHistory);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Error al actualizar el nuevo elemento",
            result: 12345
        });
    }
}

module.exports = {
    getAllHistorys,
    createNewHistory,
    getHistoryById,
    deleteHistory,
    updateHistory
}