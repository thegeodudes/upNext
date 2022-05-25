const bcrypt = require('bcrypt');
const db = require('../db');

const SALT_WORK_FACTOR = 10;

const userController = {
  signup: async (req, res, next) => {
    const { username, password } = req.body;
    try {
      const hash = await bcrypt.hash(password, SALT_WORK_FACTOR);
      const params = [username, hash];
      const queryString = 'INSERT INTO users(username, password) VALUES($1, $2) RETURNING id;';
      const result = await db.query(queryString, params);
      res.locals.result = result.rowCount;
      res.locals.userId = result.rows[0].id;
    } catch (err) {
      return next({
        log: `An error occurred in userController.signup middleware: ${err}`,
        message: { err: 'An error occurred while registering a user' },
      });
    }
    return next();
  },

  login: async (req, res, next) => {
    try {
      const { username, password } = req.body;
      const data = await db.query('SELECT id, password FROM users WHERE username = $1;', [username]);
      const verified = await bcrypt.compare(password, data.rows[0].password);
      if (verified) res.locals.userId = data.rows[0].id;
      else throw new Error('you are NOT verified!');
    } catch (err) {
      return next({
        log: `An error occurred in userController.login middleware: ${err}`,
        message: { err: 'An error occurred while logging in a user' },
      });
    }
    return next();
  },
};

module.exports = userController;
