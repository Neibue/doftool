const mongoose = require('mongoose');
const Joi = require('joi');

const setSchema = new mongoose.Schema({
    name: String,
    imageUrl: String,
    encyclopediaUrl: String,
    level: Number,
    bonus: Array,
    recipe: Array({
        name: String,
        imageUrl: String,
        amount: Number
    })
});

const Set = mongoose.model('Set', setSchema, 'set');

exports.Set = Set;
