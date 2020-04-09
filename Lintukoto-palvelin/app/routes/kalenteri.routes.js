module.exports = app => {
  const express = require('express');
  const mongoose = require('mongoose');
  const MongoClient = require('mongodb').MongoClient;
  const Kayttaja = require('../models/user.model');

  var url =
    'mongodb+srv://henri:7Eq3nDZ2qpR0DpHT@cluster0-3mfrw.mongodb.net/Lintukoto?retryWrites=true&w=majority';

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db('Lintukoto');
    app.use(function(req, res, next) {
      res.header('Access-Control-Allow-Origin', '*');
      res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
      );
      next();
    });

    app.post('/GetData', (req, res) => {
      dbo
        .collection('ScheduleData')
        .find({ user: req.body.user })
        .toArray((err, cus) => {
          res.send(cus);
        });
    });
    app.post('/BatchData', (req, res) => {
      var eventData = [];
      if (
        req.body.action == 'insert' ||
        (req.body.action == 'batch' && req.body.added.length > 0)
      ) {
        req.body.action == 'insert'
          ? eventData.push(req.body.value)
          : (eventData = req.body.added);
        for (var i = 0; i < eventData.length; i++) {
          var sdate = new Date(eventData[i].StartTime);
          var edate = new Date(eventData[i].EndTime);
          var user = req.body.params.user;
          eventData[i].user = user;
          eventData[i].StartTime = new Date(+sdate);
          eventData[i].EndTime = new Date(+edate);
          dbo.collection('ScheduleData').insertOne(eventData[i]);
        }
      }
      if (
        req.body.action == 'update' ||
        (req.body.action == 'batch' && req.body.changed.length > 0)
      ) {
        req.body.action == 'update'
          ? eventData.push(req.body.value)
          : (eventData = req.body.changed);
        for (var i = 0; i < eventData.length; i++) {
          delete eventData[i]._id;
          var sdate = new Date(eventData[i].StartTime);
          var edate = new Date(eventData[i].EndTime);
          var user = req.body.params.user;
          eventData[i].user = user;
          eventData[i].StartTime = new Date(+sdate);
          eventData[i].EndTime = new Date(+edate);
          dbo
            .collection('ScheduleData')
            .updateOne({ Id: eventData[i].Id }, { $set: eventData[i] });
        }
      }
      if (
        req.body.action == 'remove' ||
        (req.body.action == 'batch' && req.body.deleted.length > 0)
      ) {
        req.body.action == 'remove'
          ? eventData.push({ Id: req.body.key })
          : (eventData = req.body.deleted);
        for (var i = 0; i < eventData.length; i++) {
          dbo.collection('ScheduleData').deleteOne({ Id: eventData[i].Id });
        }
      }
      res.send(req.body);
    });
  });
};
