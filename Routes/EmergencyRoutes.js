const express = require('express');
const router = express.Router();
const { getAllEmergencies, getEmergencyById, updateEmergencyStatus } = require('../Services/EmergencyService');

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
        res.status(200).redirect('/');
    } catch (error) {
        res.status(400).redirect(`/error.html?message=${encodeURIComponent(error.message)}`);
    }
});

module.exports = router;
