const express = require('express');
const moongose = require('mongoose');
const routes = require('./routes');

moongose.connect('mongodb+srv://omnistack:omnistack@cluster0-iccyn.gcp.mongodb.net/tinDev?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)
const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333);
