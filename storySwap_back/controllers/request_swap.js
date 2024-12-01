const { response, request } = require("express");
const { RequestSwapRepository } = require("../repositories/request_swap");

const getAllRequestSwaps = async (req = request, res = response) => {
    try {
        const result = await RequestSwapRepository.getAll();
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: "Error al obtener los datos"
        });
    }
};

const getRequestSwapById = async (req = request, res = response) => {
    const { id } = req.params;
    try {
        const result = await RequestSwapRepository.getById(id);
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

const createNewRequestSwap = async (req = request, res = response) => {
    const { name, year, episodes, image, description, genre } = req.body;
    const RequestSwapData = { name, year, episodes, image, description, genre }

    if (!name || !year || !episodes || !image || !description || !genre) {
        res.status(400).json({
            msg: "Información Incompleta",
            result: 12345
        });
        return;
    }
    try {
        const savedRequestSwap = await RequestSwapRepository.create(RequestSwapData);
        res.status(200).json(savedRequestSwap);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Error al agregar el nuevo elemento",
            result: 12345
        });
    }
}

const deleteRequestSwap = async (req = request, res = response) => {
    const { id } = req.params;
    try {
        const existingRequestSwap = await RequestSwapRepository.getById(id);
        if (!existingRequestSwap) {
            res.status(404).json({ msg: "Elemento no encontrado" });
            return;
        }
        const deletedRequestSwap = await RequestSwapRepository.deleteById(id);
        res.status(200).json(deletedRequestSwap);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Error al eliminar el elemento",
            result: 12345
        });
    }
}

const updateRequestSwap = async (req = request, res = response) => {
    const { id } = req.params;
    const updateFields = req.body;

    if (Object.keys(updateFields).length === 0) {
        res.status(400).json({ msg: "No se recibieron campos para actualizar" });
        return;
    }

    try {
        const existingRequestSwap = await RequestSwapRepository.getById(id);
        if (!existingRequestSwap) {
            res.status(404).json({ msg: "Elemento no encontrado" });
            return;
        }
        const updatedRequestSwap = await RequestSwapRepository.updateById(id, updateFields);
        res.status(200).json(updatedRequestSwap);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Error al actualizar el nuevo elemento",
            result: 12345
        });
    }
}

module.exports = {
    getAllRequestSwaps,
    createNewRequestSwap,
    getRequestSwapById,
    deleteRequestSwap,
    updateRequestSwap
}