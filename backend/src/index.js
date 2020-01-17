const express = require('express');
const moongose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

moongose.connect('mongodb+srv://omnistack:UKg4si4i1ELeSXyQ@cluster0-iccyn.gcp.mongodb.net/tinDev?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)
const app = express();
app.use(cors())
app.use(express.json());
app.use(routes);

app.listen(3333);
