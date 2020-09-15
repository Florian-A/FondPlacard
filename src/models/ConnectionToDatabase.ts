class ConnectionToDatabase
{
  db:any;
  config:any;
  pg:any;

  constructor() {
    this.pg = require('pg');
    this.config = {
      user: 'root',
      database: 'postgress',
      password: '1234',
      port: 3306,
      max: 10,
      idleTimeoutMillis: 30000,
    };
    this.configDb();
    this.testDb();
  }

  public configDb(): void {
    this.db = new this.pg.Pool(this.config);
  }

  public testDb(): void {
    this.db.on('connect', () => {
      console.log('Connected to the database.');
    });
  }
  
}