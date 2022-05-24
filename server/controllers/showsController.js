const db = require('../db');

const showsController = {
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
