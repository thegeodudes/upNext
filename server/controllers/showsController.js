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
      return next({
        log: `An error occurred in showsController.find middleware: ${err}`,
        message: { err: 'An error occurred while finding a show' },
      });
    }
    return next();
  },

  add: async (req, res, next) => {
    try {
      // if show exists move to next middleware
      let params = [req.body.showId];
      console.log('first in add')
      let queryString = 'SELECT FROM shows WHERE id = $1;';
      let result = await db.query(queryString, params);
      if (result.rows.length) return next();
      // grab show object using id
      const url = `https://api.themoviedb.org/3/tv/${req.body.showId}&language=en-US`;
      const response = await fetch(url, {
        method: 'get',
        headers: { Authorization: `Bearer ${process.env.TV_AUTH}` },
      });
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
      console.log('second in add')
      queryString = 'INSERT INTO shows (id, name, last_air_date, next_episode_to_air, in_production, episode_run_time, poster_path, overview, tagline) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9);';
      result = await db.query(queryString, queryParams);
      // destructure genres and networks and write to db
      // const { genres, networks } = show;
      // genres.forEach(async (genre) => {
      //   params = [genre.id, genre.name];
      //   console.log('third in add')
      //   const queryString = 'INSERT INTO genres(id, name) VALUES($1, $2) ON CONFLICT (id) DO UPDATE;';
      //   const result = await db.query(queryString, params);
      // });
      // networks.forEach(async (network) => {
      //   params = [network.id, network.name, network.logo_path];
      //   console.log('fourth in add');
      //   const queryString = 'INSERT INTO networks(id, name, logo_path) VALUES($1, $2, $3) ON CONFLICT (id) DO UPDATE;';
      //   const result = await db.query(queryString, params);
      // });
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
      // let doesShowExist = false;
      // let timeout = 0;
      const { showId, userId } = req.body;

      // function sleep(ms) {
      //   return new Promise(resolve => setTimeout(resolve, ms));
      // }

      // async function looper() {
      //   let params = [showId];
      //   let queryString = 'SELECT FROM shows WHERE id = $1;';
      //   let result = await db.query(queryString, params);
      //   console.log('what is result', result)
      //   if (result.rows.length) doesShowExist = true;
      //   timeout++;
      // }
      // let intervalId = setInterval(looper, 1000)
      // while (timeout < 10 || doesShowExist) {
      //   await sleep(1000)
      //   console.log('sleeping', timeout)
      // }
      // console.log('timed out')
      // if (timeout === 10) return next();
      console.log('addFavorite', showId, userId);
      const params = [userId, showId];
      console.log('in add fav params:', params);
      const queryString = 'INSERT INTO favorites(user_id, show_id) VALUES($1, $2) ON CONFLICT DO NOTHING;';
      let result = db.query(queryString, params);
      // const result = await db.query(queryString, params);
      console.log('success');
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
      console.log(userId, showId)
      const queryString = 'DELETE FROM favorites WHERE (user_id = $1 AND show_id = $2)';
      const result = await db.query(queryString, params);
    } catch (err) {
      return next({
        log: `An error occurred in showsController.removeFavorite middleware: ${err}`,
        message: { err: 'An error occurred while removing a favorite' },
      });
    }
    return next();
  },

  getFavorites: async (req, res, next) => {
    try {
      const { userId } = req.body;
      // let result = await db.query('SELECT show_id FROM favorites WHERE user_id = $1;', [userId]);
      // const favShowsId = result.rows.map((show) => show.show_id);
      // console.log('favShowsId', favShowsId)
      const result = await db.query('SELECT * FROM shows INNER JOIN favorites ON favorites.show_id = shows.id WHERE favorites.user_id = $1;', [userId]);
      // console.log('result', result.rows)
      res.locals.favorites = result.rows;
    } catch (err) {
      return next({
        log: `An error occurred in showsController.getFavorites middleware: ${err}`,
        message: { err: 'An error occurred while retrieving favorites' },
      });
    }
    return next();
  },
};

module.exports = showsController;
