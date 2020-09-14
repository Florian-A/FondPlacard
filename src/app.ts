import * as express from "express";
import { Routes } from "./routes";

class App {
  public app: express.Application;
  public routes: Routes = new Routes();

  constructor() {
    this.app = express();
    this.routes.routes(this.app);
  }
}

export default new App().app;