import { Request, Response } from "express";
import { TestController } from "./controllers/controllers";

export class Routes {
  
  // Instanciation des controllers.
  public testController: TestController = new TestController();
  
  // Assignation des controllers à une URL.
  public routes(app): void {
    app.route("/").get(this.testController.helloWorld);
    app.route("/test").get(this.testController.helloWorld);
  }
}