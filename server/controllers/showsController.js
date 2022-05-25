const fetch = require('cross-fetch');
const dotenv = require('dotenv');
const db = require('../db');

dotenv.config();

const showsController = {
  find: async (req, res, next) => {
    try {
      const { search } = req.query;
      const url = `https://api.themoviedb.org/3/search/tv?query=${search}&language=en-US&page=1&include_adult=false`;
      const response = await fetch(url, {
        method: 'get',
        headers: { Authorization: `Bearer ${process.env.TV_AUTH}` },
      });
      const foundShows = await response.json();
      res.locals.findResults = foundShows;
    } catch (err) {
      return next(err);
    }
    return next();
  },

  add: async (req, res, next) => {
    try {
      // grab show object using id
      const url = `https://api.themoviedb.org/3/tv/${req.query.id}&language=en-US`;
      const response = await fetch(url, {
        method: 'get',
        headers: { Authorization: `Bearer ${process.env.TV_AUTH}` },
      });
      let params = [req.query.id];
      const show = await response.json();
      // destructure and write show to db
      const {
        id,
        name,
        last_air_date,
        next_episode_to_air,
        in_production,
        episode_run_time,
        poster_path,
        overview,
        tagline,
      } = show;
      const queryParams = [
        id,
        name,
        last_air_date,
        next_episode_to_air,
        in_production,
        episode_run_time[0],
        poster_path,
        overview,
        tagline,
      ];
      const queryString = 'INSERT INTO shows (id, name, last_air_date, next_episode_to_air, in_production, episode_run_time, poster_path, overview, tagline) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9);';
      const result = await db.query(queryString, queryParams);
      // destructure genres and networks and write to db
      const { genres, networks } = show;
      genres.forEach(async (genre) => {
        params = [genre.id, genre.name];
        const queryString = 'INSERT INTO genres(id, name) VALUES($1, $2) ON CONFLICT (id) DO UPDATE;';
        const result = await db.query(queryString, params);
      });
      networks.forEach(async (network) => {
        params = [network.id, network.name, network.logo_path];
        const queryString = 'INSERT INTO networks(id, name, logo_path) VALUES($1, $2, $3) ON CONFLICT (id) DO UPDATE;';
        const result = await db.query(queryString, params);
      });
    } catch (err) {
      return next({
        log: `An error occurred in showsController.add middleware: ${err}`,
        message: { err: 'An error occurred while adding a show' },
      });
    }
    return next();
  },

  addFavorite: async (req, res, next) => {
    try {
      const { showId, userId } = req.body;
      const params = [userId, showId];
      const queryString = 'INSERT INTO favorites(user_id, show_id) VALUES($1, $2);';
      const result = await db.query(queryString, params);
    } catch (err) {
      return next({
        log: `An error occurred in showsController.addFavorite middleware: ${err}`,
        message: { err: 'An error occurred while adding a favorite' },
      });
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
