const express = require('express');
const Route = express.Router();

const ControllerEventos = require('../controllers/ControllerEventos');

Route.get('/', ControllerEventos.listall)
    .post('/', ControllerEventos.create)
    .get('/:key/:value', ControllerEventos.find, ControllerEventos.show)
    .put('/:key/:value', ControllerEventos.find, ControllerEventos.update)
    .delete('/:key/:value', ControllerEventos.find, ControllerEventos.deleted)

module.exports = Route;