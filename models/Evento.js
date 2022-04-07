const mongoose = require('mongoose');

const EventosSchema = new mongoose.Schema({
    nombre: {
        type: String,
        //unique: true,
        required: true
    },
    Informacion: {
        type: String,
        required: true
    },
    imagen: {
        type: String,
        required: true
    },
    participantes: {
        type: Array,
        required: true
    },
    streamer: {
        type: String,
        required: true
    },
    notas: {
        type: Array,
        required: true
    },
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: false
    },
    }, {collection: 'Eventos'});

const Eventos = mongoose.model('Eventos', EventosSchema);

module.exports = Eventos;