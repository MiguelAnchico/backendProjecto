const express = require('express');
const Route = express.Router();

const ControllerStreamer = require('../controllers/ControllerStreamer');

Route.get('/', ControllerStreamer.listall)
    .post('/', ControllerStreamer.create)
    .get('/:key/:value', ControllerStreamer.find, ControllerStreamer.show)
    .put('/:key/:value', ControllerStreamer.find, ControllerStreamer.update)
    .delete('/:key/:value', ControllerStreamer.find, ControllerStreamer.deleted)

module.exports = Route;