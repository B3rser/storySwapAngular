const { response, request } = require("express");
const { BookRepository } = require("../repositories/book");

const getAllBooks = async (req = request, res = response) => {
    const queryFilters = {};
    const { searchTerm, author, gender } = req.query;

    if (searchTerm) {
        queryFilters.title = new RegExp(searchTerm, 'i');
    }
    if (author) {
        queryFilters.author = new RegExp(author, 'i');
    }
    if (gender) {
        queryFilters.gender = new RegExp(gender, 'i');
    }

    try {
        const result = await BookRepository.getAll(queryFilters);
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: "Error al obtener los datos"
        });
    }
};

const getBookById = async (req = request, res = response) => {
    const { id } = req.params;
    try {
        const result = await BookRepository.getById(id);
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

const createNewBook = async (req = request, res = response) => {
    const { name, year, episodes, image, description, genre } = req.body;
    const BookData = { name, year, episodes, image, description, genre }

    if (!name || !year || !episodes || !image || !description || !genre) {
        res.status(400).json({
            msg: "Información Incompleta",
        });
        return;
    }
    try {
        const savedBook = await BookRepository.create(BookData);
        res.status(200).json(savedBook);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Error al agregar el nuevo elemento",
        });
    }
}

const deleteBook = async (req = request, res = response) => {
    const { id } = req.params;
    try {
        const existingBook = await BookRepository.getById(id);
        if (!existingBook) {
            res.status(404).json({ msg: "Elemento no encontrado" });
            return;
        }
        const deletedBook = await BookRepository.deleteById(id);
        res.status(200).json(deletedBook);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Error al eliminar el elemento",
        });
    }
}

const updateBook = async (req = request, res = response) => {
    const { id } = req.params;
    const updateFields = req.body;

    if (Object.keys(updateFields).length === 0) {
        res.status(400).json({ msg: "No se recibieron campos para actualizar" });
        return;
    }

    try {
        const existingBook = await BookRepository.getById(id);
        if (!existingBook) {
            res.status(404).json({ msg: "Elemento no encontrado" });
            return;
        }
        const updatedBook = await BookRepository.updateById(id, updateFields);
        res.status(200).json(updatedBook);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Error al actualizar el nuevo elemento",
        });
    }
}

const getGenres = async (req = request, res = response) => {
    try {
        const genres = await BookRepository.getDistinctGenres();
        if (!genres) {
            res.status(404).json({ msg: "Elemento no encontrado" });
            return;
        }
        res.status(200).json(genres);
    } catch (error) {
        console.error('Error al obtener los géneros:', error);
        res.status(500).json({
            msg: "Error al obtener los géneros"
        });
    }
};

module.exports = {
    getAllBooks,
    createNewBook,
    getBookById,
    deleteBook,
    updateBook,
    getGenres
}