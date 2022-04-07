const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const Database = require('./conf/database');
const config = require('./conf/config');


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

const Streamer = require('./routes/streamerRoute');
//const Colaboradores = require('./routes/colaboradoresRoute');
const Eventos = require('./routes/eventosRoute');

app.use('/streamers', Streamer);
//app.use('/colaboradores', Colaboradores);
app.use('/eventos', Eventos);

Database.connect();

app.listen(config.PORT, () =>{
    console.log('Server on port 8080');
});