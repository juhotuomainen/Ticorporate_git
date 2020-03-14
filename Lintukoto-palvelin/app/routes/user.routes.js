module.exports = app => {
  const express = require('express');
  const mongoose = require('mongoose');
  const bcrypt = require('bcrypt');
  const jwt = require('jsonwebtoken');

  const Kayttaja = require('../models/user.model');

  app.post('/login', (req, res) => {
    Kayttaja.Kayttaja.find({ tunnus: req.body.tunnus })
      .exec()
      .then(kayttaja => {
        if (kayttaja.length < 1) {
          return res.status(401).json({ message: 'Kirjautuminen epäonnistui' });
        }
        bcrypt.compare(
          req.body.password,
          kayttaja[0].password,
          (err, result) => {
            if (err) {
              return res.status(401).json({
                message: 'Kirjautuminen epäonnistui'
              });
            }
            if (result) {
              const token = jwt.sign(
                {
                  tunnus: kayttaja[0].tunnus,
                  kayttajaId: kayttaja[0]._id
                },
                'process.env.JWT_KEY',
                {
                  expiresIn: '1h'
                }
              );
              return res.status(200).json({
                message: 'Kirjautuminen onnistui!',
                token: token
              });
            }
            res.status(401).json({
              message: 'Kirjautuminen epäonnistui'
            });
          }
        );
      })
      .catch();
  });

  app.post('/signup', (req, res, next) => {
    Kayttaja.Kayttaja.find({ tunnus: req.body.tunnus })
      .exec()
      .then(kayttaja => {
        if (kayttaja.length >= 1) {
          return res.status(409).json({
            message: 'Tunnus on jo olemassa'
          });
        } else {
          bcrypt.hash(req.body.password, 10, (err, hash) => {
            if (err) {
              console.log(err);
              return res.status(500).json({
                error: err
              });
            } else {
              const kayttaja = new Kayttaja.Kayttaja({
                _id: new mongoose.Types.ObjectId(),
                tunnus: req.body.tunnus,
                password: hash
              });
              kayttaja
                .save()
                .then(result => {
                  console.log(result);
                  res.status(201).json({
                    message: 'Käyttäjä luotu'
                  });
                })
                .catch(err => {
                  console.log(err);
                  res.status(500).json({
                    error: err
                  });
                });
            }
          });
        }
      });
  });

  app.delete('/:KayttajaId', (req, res, next) => {
    Kayttaja.deleteOne({ _id: req.params.KayttajaId })
      .exec()
      .then(() => {
        res.status(200).json({ message: 'Käyttäjätili poistettu' });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ message: 'Käyttäjätiliä ei voitu poistaa' });
      });
  });

  app.post('/tallennaAseukset', (req, res, next) => {
    console.log(req.body);
    Kayttaja.Kayttaja.findOneAndUpdate(
      { tunnus: req.body.tunnus },
      { $set: { asetukset: req.body } }
    ).then(res.status(200).json({ message: 'Asetukset tallennettu' }));
  });

  app.get('/haeAsetukset', (req, res, next) => {
    console.log(req);
    Kayttaja.Kayttaja.findOne({ tunnus: req.query.tunnus }).then(user => {
      res.status(200).json({ asetukset: user.asetukset });
    });
  });
};
