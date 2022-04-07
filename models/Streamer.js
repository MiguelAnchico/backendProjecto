const mongoose = require('mongoose');

const StreamerSchema = new mongoose.Schema({
    nombre: {
        type: String,
        //unique: true,
        required: true
    },
    correo: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    edad: {
        type: String,
        required: true
    },
    pais: {
        type: String,
        required: true
    },
    foto_perfil: {
        type: String,
        required: true
    },
    datos_perfil: {
        type: String,
        required: true
    },
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: false
    },
    }, {collection: 'Streamer'});

const Streamer = mongoose.model('Streamer', StreamerSchema);

module.exports = Streamer;