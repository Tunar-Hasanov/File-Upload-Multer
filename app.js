// app.js
const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const path = require('path');
const cors = require('cors');
const routes = require('./routes/routes');

app.use(cors({ origin: '*' }));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/', routes);

module.exports = app;
