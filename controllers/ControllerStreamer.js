const Streamer = require('../models/Streamer');
const mongoose = require('mongoose');

function listall(req, res) {
    Streamer.find({})
        .then(streamers => {
            return res.json( [streamers] );

        }).catch(err => res.status(500).send({ err }))
}

function create(req, res) {
    let streamer = new Streamer(req.body);
    streamer._id = mongoose.Types.ObjectId();
    streamer.save()
        .then(streamer =>
            res.status(201).send({ streamer })
        ).catch(err => res.status(500).send({ err }))
}

function show(req, res) {
    if (req.body.error) return res.status(500).send({ error });
    if (!req.body.streamer) return res.status(404).send({ message: 'Not Found' });
    let streamer = req.body.streamer;
    return res.status(200).send({ streamer });
}

function update(req, res) {
    if (req.body.error) return res.status(500).send({ error });
    if (!req.body.products) return res.status(404).send({ message: 'Not Found' });
    let streamer = req.body.streamer[0];
    streamer = Object.assign(streamer, req.body);
    streamer.save()
        .then(product => res.status(200).send({ message: 'Producto Updated', product })
        ).catch(err => res.status(500).send({ err }))
}

function deleted(req, res) {
    if (req.body.error) return res.status(500).send({ error });
    if (!req.body.streamer) return res.status(404).send({ message: 'Not Found' });
    req.body.streamer[0].remove()
        .then(product => {
            res.status(200).send({ message: 'Producto removed', product })
        }
        ).catch(err => res.status(500).send({ err }));
}

function find(req, res, next) {
    let query = {};
    query[req.params.key] = req.params.value
    Streamer.find(query).then(streamer => {
        if (!streamer.length) return next();
        req.body.streamer = streamer;
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