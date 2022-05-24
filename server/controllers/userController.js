const db = require('../db');

const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;

const userController = {};

userController.signup = async (req, res, next) => {
  const { username, password } = req.body;
  try {
    console.log('in create user');
    console.log(username, password);
    const hash = await bcrypt.hash(password, SALT_WORK_FACTOR);
    const params = [username, hash];
    const queryString = 'INSERT INTO users(username, password) VALUES($1, $2) RETURNING id;';
    const result = await db.query(queryString, params);
    console.log('after query');
    res.locals.result = result.rowCount;
    res.locals.userId = result.rows[0].id;
    console.log('after setting');
  } catch (err) {
    console.log('error:', err);
    return next(err);
  }
  return next();
};

userController.login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const data = await db.query('SELECT id, password FROM users WHERE username = $1;', [username]);
    const verified = await bcrypt.compare(password, data.rows[0].password);
    if (verified) res.locals.userId = data.rows[0].id;
    else throw new Error('you are NOT verified!');
  } catch (err) {
    return next(err);
  }
  return next();
};

module.exports = userController;
