const express = require('express');
const router = express.Router();
const { getAllHazards, getHazardById, updateHazardStatus } = require('../Services/HazardsService');

router.get('/', async (req, res) => {
    try {
        const hazards = await getAllHazards();
        res.json(hazards);
    } catch (error) {
        res.status(400).redirect(`/error.html?message=${encodeURIComponent(error.message)}`);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const hazard = await getHazardById(req.params.id);
        res.json(hazard);
    } catch (error) {
        res.status(400).redirect(`/error.html?message=${encodeURIComponent(error.message)}`);
    }
});

router.get('/update/:id', async (req, res) => {
    try {
        await updateHazardStatus(req.params.id);
        res.status(200).redirect('/');
    } catch (error) {
        res.status(400).redirect(`/error.html?message=${encodeURIComponent(error.message)}`);
    }
});

module.exports = router;
