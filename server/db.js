const dotenv = require('dotenv');
const pkg = require('pg');

dotenv.config();
const { Pool } = pkg;

let PG_URI;
if (process.env.TEST === 'true') {
  PG_URI = process.env.TEST_URI;
} else {
  PG_URI = process.env.DB_URI;
}

const pool = new Pool({
  connectionString: PG_URI,
  // idleTimeoutMillis: 2000,
  // allowExitOnIdle: true,
});

module.exports = {
  query: (text, params, callback) => pool.query(text, params, callback),
  end: () => pool.end(),
};
