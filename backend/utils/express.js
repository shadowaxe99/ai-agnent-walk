const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Enable Cross-Origin Resource Sharing
app.use(cors());

// Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

module.exports = app;