const sets = require('./routes/sets');

const mongoose = require('mongoose');

const express = require('express');
const app = express();

mongoose.connect('mongodb://localhost/dofus-scraper', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(console.log('Connected to database...'))
    .catch(err => new Error(err));

app.use(express.json());
app.use('/api/sets', sets);

app.listen(3000);
console.log('Listenning on http://localhost:3000/');