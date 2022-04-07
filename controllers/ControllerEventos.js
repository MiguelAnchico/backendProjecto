const Eventos = require('../models/Evento');
const mongoose = require('mongoose');

function listall(req, res) {
    Eventos.find({})
        .then(eventos => {
            return res.json( [eventos] );

        }).catch(err => res.status(500).send({ err }))
}

function create(req, res) {
    let Eventos = new Eventos(req.body);
    eventos._id = mongoose.Types.ObjectId();
    eventos.save()
        .then(eventos =>
            res.status(201).send({ eventos })
        ).catch(err => res.status(500).send({ err }))
}

function show(req, res) {
    if (req.body.error) return res.status(500).send({ error });
    if (!req.body.eventos) return res.status(404).send({ message: 'Not Found' });
    let eventos = req.body.eventos;
    return res.status(200).send({ eventos });
}

function update(req, res) {
    if (req.body.error) return res.status(500).send({ error });
    if (!req.body.products) return res.status(404).send({ message: 'Not Found' });
    let eventos = req.body.eventos[0];
    eventos = Object.assign(eventos, req.body);
    eventos.save()
        .then(product => res.status(200).send({ message: 'Producto Updated', product })
        ).catch(err => res.status(500).send({ err }))
}

function deleted(req, res) {
    if (req.body.error) return res.status(500).send({ error });
    if (!req.body.eventos) return res.status(404).send({ message: 'Not Found' });
    req.body.eventos[0].remove()
        .then(eventos => {
            res.status(200).send({ message: 'Producto removed', eventos })
        }
        ).catch(err => res.status(500).send({ err }));
}

function find(req, res, next) {
    let query = {};
    query[req.params.key] = req.params.value
    Eventos.find(query).then(eventos => {
        if (!eventos.length) return next();
        req.body.eventos = eventos;
        return next();
    }).catch(err => {
        req.body.error = err;
        next();
    })
}

module.exports = {
    listall,
    create,
    find,
    show,
    deleted,
    update
}