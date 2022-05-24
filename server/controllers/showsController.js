const fetch = require('cross-fetch');
const dotenv = require('dotenv');
const db = require('../db');

dotenv.config();

const showsController = {
  find: async (req, res, next) => {
    try {
      console.log('find shows', req.query, process.env.TV_AUTH);
      const { search } = req.query;
      // const url = `https://api.themoviedb.org/3/search/tv?api_key=<<api_key>>&language=en-US&page=1&include_adult=false`
      const url = `https://api.themoviedb.org/3/search/tv?query=${search}&language=en-US&page=1&include_adult=false`;
      const response = await fetch(url, {
        method: 'get',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${process.env.TV_AUTH}` },
      });
      console.log(response);
      const foundShows = await response.json();
      res.locals.findResponse = foundShows;
    } catch (err) {
      return next(err);
    }
    return next();
  },

  createFavorite: async (req, res, next) => {
    try {
      const { showId, userId } = req.body;
      const params = [userId, showId];
      const queryString = 'WITH temp AS (INSERT INTO show (id) VALUES($2) ON CONFLICT (id) DO NOTHING) INSERT INTO favorites(users_id, shows_id) VALUES($1, $2);';
      const result = await db.query(queryString, params);
    } catch (err) {
      return next(err);
    }
    return next();
  },

  removeFavorite: async (req, res, next) => {
    try {
      const { showId, userId } = req.body;
      const params = [userId, showId];
      const queryString = 'DELETE FROM favorites WHERE (user_id = $1 AND shows_id = $2)';
      const result = await db.query(queryString, params);
    } catch (err) {
      return next(err);
    }
    return next();
  },

  getFavorites: async (req, res, next) => {
    try {
      const { userId } = req.body;
      const result = await db.query('SELECT shows_id FROM favorites WHERE users_id = $1;', [userId]);
      const favorites = result.rows;
      res.locals.favorites = favorites;
    } catch (err) {
      return next(err);
    }
    return next();
  },
};

module.exports = showsController;
