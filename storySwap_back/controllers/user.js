const { response, request } = require("express");
const { UserRepository } = require("../repositories/user");

const getAllUsers = async (req = request, res = response) => {
    const queryFilters = {};
    const { searchTerm, state } = req.query;

    if (searchTerm) {
        queryFilters.email = new RegExp(searchTerm, 'i');
        queryFilters.name = new RegExp(searchTerm, 'i');
    }
    if (state) {
        queryFilters.state = new RegExp(state, 'i');
    }

    try {
        const result = await UserRepository.getAll(queryFilters);
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: "Error al obtener los datos"
        });
    }
};


const getUserById = async (req = request, res = response) => {
    const { id } = req.params;
    try {
        const result = await UserRepository.getById(id);
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

const createNewUser = async (req = request, res = response) => {
    const { address, email, password, last, name } = req.body;
    const UserData = { address, email, password, last, name };

    if (!email || !password || !name) {
        return res.status(400).json({
            msg: "Incomplete information: email, password, and name are required",
        });
    }

    try {
        const savedUser = await UserRepository.create(UserData);
        res.status(200).json(savedUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: "Error adding the new user",
        });
    }
};

const deleteUser = async (req = request, res = response) => {
    const { id } = req.params;
    try {
        const existingUser = await UserRepository.getById(id);
        if (!existingUser) {
            res.status(404).json({ msg: "Elemento no encontrado" });
            return;
        }
        const deletedUser = await UserRepository.deleteById(id);
        res.status(200).json(deletedUser);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Error al eliminar el elemento",
            result: 12345
        });
    }
}

const updateUser = async (req = request, res = response) => {
    const { id } = req.params;
    const updateFields = req.body;

    if (Object.keys(updateFields).length === 0) {
        res.status(400).json({ msg: "No se recibieron campos para actualizar" });
        return;
    }

    try {
        const existingUser = await UserRepository.getById(id);
        if (!existingUser) {
            res.status(404).json({ msg: "Elemento no encontrado" });
            return;
        }
        const updatedUser = await UserRepository.updateById(id, updateFields);
        res.status(200).json(updatedUser);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Error al actualizar el nuevo elemento",
            result: 12345
        });
    }
}

module.exports = {
    getAllUsers,
    createNewUser,
    getUserById,
    deleteUser,
    updateUser
}