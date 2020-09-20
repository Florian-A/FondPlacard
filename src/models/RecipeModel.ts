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
      const query = `SELECT * FROM recipe WHERE id = $1`;
      const res = await this.dbConnection.query(query, [id]);
      await this.dbConnection.end();

      let recipe;
      res.rows.forEach(res => recipe = this.responseToRecipe(res));
      
      return recipe;
    }
    catch (err: any) {
      this.dbConnection.end();
      return console.log(err);
    }
  };

  async new(name,category,picture,ingredientIdArray) {
    try {
      const query = `INSERT INTO recipe (name,category,picture) VALUES ($1,$2,$3) RETURNING id,name,category,picture`;
      const recipeRes = await this.dbConnection.query(query, [name,category,picture]);
      for (let ingredientId of ingredientIdArray) {
        const query = `INSERT INTO jt_ingredient_recipe VALUES ($1,$2)`;
        await this.dbConnection.query(query, [ingredientId,recipeRes.rows[0].id]);
      }
      await this.dbConnection.end();

      let recipe;
      recipeRes.rows.forEach(res => recipe = this.responseToRecipe(recipeRes));

      return recipe;
    }
    catch (err: any) {
      this.dbConnection.end();
      return console.log(err);
    }
  };

  async edit(id,name,category,picture) {
    try {
      const query = `UPDATE recipe SET name = $2, category = $3, picture = $4 WHERE id = $1 RETURNING id,name,category,picture`;
      const res = await this.dbConnection.query(query, [id,name,category,picture]);
      await this.dbConnection.end();

      let recipe;
      res.rows.forEach(res => recipe = this.responseToRecipe(res));

      return recipe;
    }
    catch (err: any) {
      this.dbConnection.end();
      return console.log(err);
    }
  };

  async del(id) {
    try {
      const query = `DELETE FROM recipe WHERE id = $1`;
      await this.dbConnection.query(query, [id]);
      await this.dbConnection.end();
    }
    catch (err: any) {
      this.dbConnection.end();
      return console.log(err);
    }
  };

  private responseToRecipe(res) {
    return new Recipe(res.name,res.category,res.id,res.picture,res.score);
  }
}