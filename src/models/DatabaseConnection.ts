export default class DatabaseConnection {
  dbConnection: any;
  config: any;
  pg: any;

  constructor() {
    this.pg = require('pg');
    this.config = {
      host: 'db',
      user: 'root',
      database: 'postgres',
      password: '1234',
      port: 5432,
      max: 1,
      idleTimeoutMillis: 100,
    };
    this.initDatabase();
  }

  public initDatabase(): void {
    this.dbConnection = new this.pg.Pool(this.config);
  }

}