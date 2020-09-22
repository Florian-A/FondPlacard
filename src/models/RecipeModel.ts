import ConnectionToDatabas from "./ConnectionToDatabase";
import { Recipe } from "../types/Recipe";

export default class RecipeModel extends ConnectionToDatabas
{
  async getAll() {
    try {
      const query = `SELECT * FROM recipe ORDER BY id`;
      let res = await this.dbConnection.query(query);
      await this.dbConnection.end();

      let recipes = [];
      res.rows.forEach(res => recipes.push(this.responseToRecipe(res)));
      
      return recipes;
    }
    catch (err: any) {
      this.dbConnection.end();
      return console.log(err);
    }
  };

  async get(id) {
    try {
      const recipeQuery = `SELECT * FROM recipe WHERE id = $1`;
      const recipeRes = await this.dbConnection.query(recipeQuery, [id]);
      
      const jtQuery = `SELECT * FROM jt_ingredient_recipe WHERE id_recipe = $1`;
      const ingredientRes = await this.dbConnection.query(jtQuery, [id]);
      await this.dbConnection.end();

      let recipe;
      recipeRes.rows.forEach(res => recipe = this.responseToRecipe(recipeRes.rows[0]));;

      for (let ingredient of ingredientRes.rows) {
        console.log(ingredient.id_ingredient);
        recipe.addIngredientId(ingredient.id_ingredient);
      }
      
      return recipe;
    }
    catch (err: any) {
      this.dbConnection.end();
      return console.log(err);
    }
  };

  async new(name,category,picture,ingredientsId) {
    try {
      const recipeQuery = `INSERT INTO recipe (name,category,picture) VALUES ($1,$2,$3) RETURNING id,name,category,picture`;
      const recipeRes = await this.dbConnection.query(recipeQuery, [name,category,picture]);
      for (let ingredientId of ingredientsId) {
        const jtQuery = `INSERT INTO jt_ingredient_recipe VALUES ($1,$2)`;
        await this.dbConnection.query(jtQuery, [ingredientId,recipeRes.rows[0].id]);
      }
      await this.dbConnection.end();
      let recipe;
      recipeRes.rows.forEach(res => recipe = this.responseToRecipe(recipeRes.rows[0],ingredientsId));

      return recipe;
    }
    catch (err: any) {
      this.dbConnection.end();
      return console.log(err);
    }
  };

  async edit(id,name,category,picture,ingredientsId) {
    try {
      let recipeQuery = `UPDATE recipe SET name = $2, category = $3, picture = $4 WHERE id = $1 RETURNING id,name,category,picture`;
      const recipeRes = await this.dbConnection.query(recipeQuery, [id,name,category,picture]);
      const jtQuery = `DELETE FROM jt_ingredient_recipe WHERE id_recipe = $1`;
      await this.dbConnection.query(jtQuery, [id]);
      for (let ingredientId of ingredientsId) {
        const jtQuery = `INSERT INTO jt_ingredient_recipe VALUES ($1,$2)`;
        await this.dbConnection.query(jtQuery, [ingredientId,recipeRes.rows[0].id]);
      }
      await this.dbConnection.end();

      let recipe;
      recipeRes.rows.forEach(res => recipe = this.responseToRecipe(res,ingredientsId));

      return recipe;
    }
    catch (err: any) {
      this.dbConnection.end();
      return console.log(err);
    }
  };

  async del(id) {
    try {
      const jtQuery = `DELETE FROM jt_ingredient_recipe WHERE id_recipe = $1`;
      await this.dbConnection.query(jtQuery, [id]);

      const query = `DELETE FROM recipe WHERE id = $1`;
      await this.dbConnection.query(query, [id]);

      await this.dbConnection.end();
    }
    catch (err: any) {
      this.dbConnection.end();
      return console.log(err);
    }
  };

  private responseToRecipe(recipe,ingredients?) {
    return new Recipe(recipe.name,recipe.category,recipe.id,recipe.picture,recipe.score,ingredients);
  }
}