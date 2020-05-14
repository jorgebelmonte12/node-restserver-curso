const express = require('express');
const Usuario = require('../models/usuario.js');

const bcrypt = require('bcrypt');

const app = express();


app.get('/usuario', (req, res) => {
    res.json('get Usuario');
});

app.post('/usuario', (req, res) => {

    let body = req.body;

    let usuario = new Usuario({
        nombre: body.nombre,
        email: body.email,
        password: bcrypt.hashSync(body.password, 10),
        role: body.role
    });

    usuario.save((err, usuarioDB) => {

        if (err) {
            return res.status(400).json({
                ok: false,
                err: err
            });
        }

        //usuarioDB.password = null; // <<< Para que no salga la contraseña en el JSON, si aparece pero como null

        res.json({
            ok: true,
            usuario: usuarioDB
        });

    });

    /* if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: "Name is neccesary"
        })
    } else {
        res.json({
            body
        });
    } */


});

app.put('/usuario/:id', (req, res) => {

    let id = req.params.id;
    let body = req.body;

    Usuario.findByIdAndUpdate(id, body, { new: true, runValidators: true }, (err, usuarioDB) => {

        if (err) {
            return res.status(400).json({
                ok: false,
                err: err
            });
        }

        res.json({
            ok: true,
            usuario: usuarioDB
        });



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


module.exports = app;