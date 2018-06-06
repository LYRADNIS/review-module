const express = require('express');
const path = require('path');
const db = require('../database/index');
const app = express();

app.use(express.static(path.join(__dirname, '/../public')));

// gets aggregate overview ratings
app.get('/reviews/listingId/:listingId', (req, res) => {
  db.getOverview( req.params.listingId, (err, data) => {
    if (err) {
      res.status(500).end();
    } else {
      res.status(200);
      res.send(data);
    }
  });
});

// gets all reviews
app.get('/reviews/listingId/:listingId/reviews', (req, res) => {
  db.getReviews( req.params.listingId, (err, data) => {
    if (err) {
      res.status(500).end();
    } else {
      res.status(200);
      res.send(data);
    }
  });
});

module.exports = app;