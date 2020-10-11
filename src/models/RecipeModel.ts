import ConnectionToDatabas from "./DatabaseConnection";
import { Recipe } from "../types/Recipe";

export class RecipeModel extends ConnectionToDatabas {
  public getAll = async () => {
    try {
      const query = `SELECT * FROM recipe ORDER BY id`;
      let res = await this.dbConnection.query(query);

      let recipes = [];
      res.rows.forEach(res => recipes.push(this.responseToRecipe(res)));

      return recipes;
    }
    catch (err: any) {
      console.log(err)
    }
  };

  async get(id) {
    try {
      const recipeQuery = `SELECT * FROM recipe WHERE id = $1`;
      const recipeRes = await this.dbConnection.query(recipeQuery, [id]);

      const jtQuery = `SELECT * FROM jt_ingredient_recipe WHERE id_recipe = $1`;
      const ingredientRes = await this.dbConnection.query(jtQuery, [id]);

      let recipe;
      recipeRes.rows.forEach(res => recipe = this.responseToRecipe(recipeRes.rows[0]));;

      for (let ingredient of ingredientRes.rows) {
        recipe.addIngredientId(ingredient.id_ingredient);
      }

      return recipe;
    }
    catch (err: any) {
      console.log(err);
    }
  };

  async create(name, category, picture, ingredientsId) {
    try {
      const recipeQuery = `INSERT INTO recipe (name,category,picture) VALUES ($1,$2,$3) 
                            RETURNING id,name,category,picture,score`;

      const recipeRes = await this.dbConnection.query(recipeQuery, [name, category, picture]);
      for (let ingredientId of ingredientsId) {
        const jtQuery = `INSERT INTO jt_ingredient_recipe VALUES ($1,$2)`;
        await this.dbConnection.query(jtQuery, [ingredientId, recipeRes.rows[0].id]);
      }
      let recipe;
      recipeRes.rows.forEach(res => recipe = this.responseToRecipe(recipeRes.rows[0], ingredientsId));

      return recipe;
    }
    catch (err: any) {
      console.log(err);
    }
  };

  async edit(id, name, category, picture, ingredientsId) {
    try {
      let recipeQuery = `UPDATE recipe SET name = $2, category = $3, picture = $4 
                          WHERE id = $1 RETURNING id,name,category,picture,score`;

      const recipeRes = await this.dbConnection.query(recipeQuery, [id, name, category, picture]);
      const jtQuery = `DELETE FROM jt_ingredient_recipe WHERE id_recipe = $1`;
      await this.dbConnection.query(jtQuery, [id]);
      for (let ingredientId of ingredientsId) {
        const jtQuery = `INSERT INTO jt_ingredient_recipe VALUES ($1,$2)`;
        await this.dbConnection.query(jtQuery, [ingredientId, recipeRes.rows[0].id]);
      }

      let recipe;
      recipeRes.rows.forEach(res => recipe = this.responseToRecipe(res, ingredientsId));

      return recipe;
    }
    catch (err: any) {
      console.log(err);
    }
  };

  async del(id) {
    try {
      const jtQuery = `DELETE FROM jt_ingredient_recipe WHERE id_recipe = $1`;
      await this.dbConnection.query(jtQuery, [id]);

      const query = `DELETE FROM recipe WHERE id = $1`;
      await this.dbConnection.query(query, [id]);

    }
    catch (err: any) {
      console.log(err);
    }
  };

  async vote(id, value) {
    try {
      let recipeQuery = `SELECT * FROM recipe WHERE id = $1`;
      let recipeRes = await this.dbConnection.query(recipeQuery, [id]);

      recipeQuery = `UPDATE recipe SET score = $2 WHERE id = $1 
                      RETURNING id,name,category,picture,score`;

      recipeRes = await this.dbConnection.query(recipeQuery, [recipeRes.rows[0].id, recipeRes.rows[0].score + value]);

      const jtQuery = `SELECT * FROM jt_ingredient_recipe WHERE id_recipe = $1`;
      const ingredientRes = await this.dbConnection.query(jtQuery, [recipeRes.rows[0].id]);

      let recipe;
      recipeRes.rows.forEach(res => recipe = this.responseToRecipe(recipeRes.rows[0]));;

      for (let ingredient of ingredientRes.rows) {
        recipe.addIngredientId(ingredient.id_ingredient);
      }

      return recipe;
    }
    catch (err: any) {
      console.log(err);
    }
  };

  async getByRecipeName(name) {
    try {
      const recipesQuery = `SELECT *, word_similarity($1,name) as similarity 
                              FROM recipe 
                              ORDER BY similarity DESC LIMIT 3`;
      const recipesRes = await this.dbConnection.query(recipesQuery, [name]);

      let recipes = [];
      recipesRes.rows.forEach(res => recipes.push(this.responseToRecipe(res)));

      return recipes;
    }
    catch (err: any) {
      console.log(err);
    }
  };

  async getByIngredientId(id) {
    try {
      const recipesQuery = `SELECT r.* FROM jt_ingredient_recipe jir 
                              INNER JOIN recipe r ON jir.id_recipe = r.id 
                              WHERE jir.id_ingredient = $1`;
      const recipesRes = await this.dbConnection.query(recipesQuery, [id]);

      let recipes = [];
      recipesRes.rows.forEach(res => recipes.push(this.responseToRecipe(res)));

      return recipes;
    }
    catch (err: any) {
      console.log(err);
    }
  };

  async getByIngredientName(name) {
    try {
      const recipesQuery = `SELECT DISTINCT r.*,  word_similarity($1,r.name) AS similarity 
                              FROM jt_ingredient_recipe jir 
                              INNER JOIN recipe r ON jir.id_recipe = r.id 
                              INNER JOIN ingredient i 
                              ON jir.id_ingredient = i.id
                              ORDER BY similarity DESC LIMIT 5`;
      const recipesRes = await this.dbConnection.query(recipesQuery, [name]);

      let recipes = [];
      recipesRes.rows.forEach(res => recipes.push(this.responseToRecipe(res)));

      return recipes;
    }
    catch (err: any) {
      console.log(err);
    }
  };

  private responseToRecipe(recipe, ingredients?) {
    return new Recipe(recipe.name, recipe.category, recipe.id, recipe.picture, recipe.score, ingredients);
  }

}