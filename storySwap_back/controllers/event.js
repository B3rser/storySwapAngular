const { response, request } = require("express");
const { EventRepository } = require("../repositories/event");

const getAllEvents = async (req = request, res = response) => {
    const queryFilters = {};
    const { searchTerm, state } = req.query;

    if (searchTerm) {
        queryFilters.name = new RegExp(searchTerm, 'i');
    }
    if (state) {
        queryFilters.state = new RegExp(state, 'i');
    }

    try {
        const result = await EventRepository.getAll(queryFilters);
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: "Error al obtener los datos"
        });
    }
};

const getEventById = async (req = request, res = response) => {
    const { id } = req.params;
    try {
        const result = await EventRepository.getById(id);
        if (result === null) {
            res.status(404).json({
                msg: "No se encontró el evento"
            });
            return;
        }
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Error al obtener los datos"
        });
    }
};

const createNewEvent = async (req = request, res = response) => {
    const { name, date, description, state, ubication, image, id_organizer } = req.body;
    const eventData = { name, date, description, state, ubication, image, id_organizer };

    if (!name || !date || !description || !state || !ubication || !image || !id_organizer) {
        return res.status(400).json({
            msg: "Incomplete information: all fields are required."
        });
    }

    try {
        eventData.add_date = new Date();
        const savedEvent = await EventRepository.create(eventData);
        res.status(200).json(savedEvent);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: "Error adding the new event"
        });
    }
};

const deleteEvent = async (req = request, res = response) => {
    const { id } = req.params;
    try {
        const existingEvent = await EventRepository.getById(id);
        if (!existingEvent) {
            res.status(404).json({ msg: "Elemento no encontrado" });
            return;
        }
        const deletedEvent = await EventRepository.deleteById(id);
        res.status(200).json(deletedEvent);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Error al eliminar el evento",
        });
    }
};

const updateEvent = async (req = request, res = response) => {
    const { id } = req.params;
    const updateFields = req.body;

    if (Object.keys(updateFields).length === 0) {
        res.status(400).json({ msg: "No se recibieron campos para actualizar" });
        return;
    }

    try {
        const existingEvent = await EventRepository.getById(id);
        if (!existingEvent) {
            res.status(404).json({ msg: "Elemento no encontrado" });
            return;
        }
        const updatedEvent = await EventRepository.updateById(id, updateFields);
        res.status(200).json(updatedEvent);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Error al actualizar el evento",
        });
    }
};

module.exports = {
    getAllEvents,
    createNewEvent,
    getEventById,
    deleteEvent,
    updateEvent
};
