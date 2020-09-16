import { RecipeController } from "./controllers/RecipeController";

export class Routes {
  
  // Instanciation des controllers.
  public recipeController: RecipeController = new RecipeController();
  
  // Assignation des controllers à une URL.
  public routes(app): void {
    app.route("/recipes").get(this.recipeController.showAll).post(this.recipeController.new);
    app.route("/recipes/:id").get(this.recipeController.show).patch(this.recipeController.edit);

  }
}