const express = require('express');
const showsController = require('./controllers/showsController');

const router = express.Router();

router.post('/addshow', showsController.createFavorite, (req, res) => res.sendStatus(200));

router.post('/removeshow', showsController.removeFavorite, (req, res) => res.sendStatus(200));

router.post('/myshows', showsController.getFavorites, (req, res) => {
  res.status(200).json(res.locals.favorites);
});
