const pkg = require('pg');

const { Pool } = pkg;

let PG_URI;
if (process.env.TEST === 'true') {
  PG_URI = 'postgres://wnulfkvp:zN9ZAJbMHbvnV_KaTTH84n9F-Ogry24P@fanny.db.elephantsql.com/wnulfkvp';
} else {
  PG_URI = 'postgres://vqmiicos:wN4X4TRN4VtVoaYnjNfB0ltAXFQOPjAc@fanny.db.elephantsql.com/vqmiicos';
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
