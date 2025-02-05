const express = require('express');
const router = express.Router();
const { getAllEmergencies, getEmergencyById, updateEmergencyStatus, addEmergency } = require('../Services/EmergencyService');

router.get('/', async (req, res) => {
    try {
        const emergencies = await getAllEmergencies();
        res.json(emergencies);
    } catch (error) {
        res.status(400).redirect(`/error.html?message=${encodeURIComponent(error.message)}`);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const emergency = await getEmergencyById(req.params.id);
        res.json(emergency);
    } catch (error) {
        res.status(400).redirect(`/error.html?message=${encodeURIComponent(error.message)}`);
    }
});

router.get('/update/:id', async (req, res) => {
    try {
        await updateEmergencyStatus(req.params.id);
        res.json({ message: "Status updated to Responded" });
    } catch (error) {
        res.status(400).redirect(`/error.html?message=${encodeURIComponent(error.message)}`);
    }
});

router.post('/', async (req, res) => {
    try {
        const newEmergency = await addEmergency(req.body);
        res.status(201).json(newEmergency);
    } catch (error) {
        res.status(400).redirect(`/error.html?message=${encodeURIComponent(error.message)}`);
    }
});

module.exports = router;
