const { Pool } = require('pg'); // { Pool } je rastavljanje/destrukturiranje objekta, uzimamo samo stvari koje nam trebaju

const pool = new Pool({
  user: 'ivicasi', //marinokol
  host: '138.68.87.73', //138.68.87.73
  database: 'db_ivicasi', // db_marinokol
  password: 'GVK?4N>9', // your password
  port: 5432, // 5432
})

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
}

