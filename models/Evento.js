const mongoose = require('mongoose');

const EventosSchema = new mongoose.Schema({
    nombre: {
        type: String,
        //unique: true,
        required: true
    },
    fecha: {
        type: Date,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    imagen: {
        type: String,
        required: true
    },
    participantes: {
        type: String,
        required: false
    },
    streamer: {
        type: String,
        required: true
    },
    notas: {
        type: String,
        required: false
    },
    estado: {
        type: String,
        required: true
    },
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    }, {collection: 'Eventos'});

const Eventos = mongoose.model('Eventos', EventosSchema);

module.exports = Eventos;