const Hazards = require('../Models/HazardsModel');

const getAllHazards = async () => {
    try {
        return await Hazards.find({}, { __v: 0, image: 0 });
    } catch (error) {
        throw new Error(`Error fetching hazards: ${error.message}`);
    }
};

const getHazardById = async (id) => {
    try {
        return await Hazards.findById(id, { __v: 0});
    } catch (error) {
        throw new Error(`Error fetching hazard: ${error.message}`);
    }
};

const updateHazardStatus = async (id) => {
    try {
        await Hazards.findByIdAndUpdate(id, { status: "responded" });
    } catch (error) {
        throw new Error(`Error updating hazard status: ${error.message}`);
    }
};

const addHazard = async (data) => {
    try {
        const newHazard = new Hazards(data);
        return await newHazard.save();
    } catch (error) {
        throw new Error(`Error adding hazard: ${error.message}`);
    }
};

module.exports = { getAllHazards, getHazardById, updateHazardStatus, addHazard };
