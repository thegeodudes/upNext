const express = require('express');
const showsController = require('./controllers/showsController');

const router = express.Router();

router.get('/find', showsController.find, (req, res) => {
  console.log('findResults', res.locals.findResults);
  return res.status(200).send(res.locals.findResults);
});

router.get('/add', showsController.add, (req, res) => res.sendStatus(200));

router.post('/addfavorite', showsController.addFavorite, (req, res) => res.sendStatus(200));

router.post('/removefavorite', showsController.removeFavorite, (req, res) => res.sendStatus(200));

router.post('/myshows', showsController.getFavorites, (req, res) => {
  return res.status(200).json(res.locals.favorites);
});

module.exports = router;
