require('./config/config.js');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/usuario', (req, res) => {
    res.json('get Usuario');
});

app.post('/usuario', (req, res) => {

    let body = req.body;

    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: "Name is neccesary"
        })
    } else {
        res.json({
            body
        });
    }


});

app.put('/usuario/:id', (req, res) => {

    let id = req.params.id;

    res.json({
        id
    });
});

app.get('/:id', (req, res) => {
    let id = req.params.id;

    res.json({
        id
    })
});

app.delete('/usuario', (req, res) => {
    res.json('delete Usuario');
});

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
})