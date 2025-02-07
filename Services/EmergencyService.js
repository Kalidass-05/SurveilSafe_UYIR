const Emergency = require('../Models/EmergencyModel');

const getAllEmergencies = async () => {
    try {
        return await Emergency.find({}, { __v: 0, image: 0 });
    } catch (error) {
        throw new Error(`Error fetching emergencies: ${error.message}`);
    }
};

const getEmergencyById = async (id) => {
    try {
        return await Emergency.findById(id, { __v: 0});
    } catch (error) {
        throw new Error(`Error fetching emergency: ${error.message}`);
    }
};

const updateEmergencyStatus = async (id) => {
    try {
        await Emergency.findByIdAndUpdate(id, { status: "responded" });
    } catch (error) {
        throw new Error(`Error updating emergency status: ${error.message}`);
    }
};

module.exports = { getAllEmergencies, getEmergencyById, updateEmergencyStatus };
