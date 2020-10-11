import { RecipeController } from "./controllers/RecipeController";
import { IngredientController } from "./controllers/IngredientController";

export class Routes {
  
  // Instanciation des controllers.
  private recipeController: RecipeController = new RecipeController();
  private ingredientController: IngredientController = new IngredientController();

  // Assignation des controllers à une URL.
  public routes(app): void {

    app.route("/recipes").get(this.recipeController.showAll).post(this.recipeController.new);
    app.route("/recipes/:id").get(this.recipeController.show).patch(this.recipeController.edit).delete(this.recipeController.delete);
    app.route("/recipes/:id/vote-up").post(this.recipeController.voteUp);
    app.route("/recipes/:id/vote-down").post(this.recipeController.voteDown);
    app.route("/ingredients").get(this.ingredientController.showAll).post(this.ingredientController.new);
    app.route("/ingredients/:id").get(this.ingredientController.show).patch(this.ingredientController.edit).delete(this.ingredientController.delete);
  }
}