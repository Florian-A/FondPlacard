const pg = require('pg');

const config = {
  user: 'root',
  database: 'fond-placard',
  password: '1234',
  port: 3306,
  max: 10,
  idleTimeoutMillis: 30000,
};

const pool = new pg.Pool(config);

pool.on('connect', () => {
  console.log('Connected to the database.');
});