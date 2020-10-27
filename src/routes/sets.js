const {Set} = require('../models/set');

const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    const sets = await Set.find();
    if (!sets) return res.status(404).send('No sets was found');

    res.send(sets);
});

module.exports = router;
