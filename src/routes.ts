import { RecipesController } from "./controllers/RecipesController";

export class Routes {
  
  // Instanciation des controllers.
  public recipesController: RecipesController = new RecipesController();
  
  // Assignation des controllers à une URL.
  public routes(app): void {
    app.route("/recipes").get(this.recipesController.showAll);
  }
}