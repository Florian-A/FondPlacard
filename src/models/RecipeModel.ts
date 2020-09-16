import ConnectionToDatabas from "./ConnectionToDatabase";
import { Recipe } from "../types/Recipe";

export default class RecipeModel extends ConnectionToDatabas
{
  async findAll() {
    try {
      const query = `SELECT * FROM recipe`;
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

  async findById(id) {
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

  async new(name,category,picture) {
    try {
      const query = `INSERT INTO recipe (name,category,picture) VALUES ($1,$2,$3) RETURNING id,name,category,picture`;
      const res = await this.dbConnection.query(query, [name,category,picture]);
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

  private responseToRecipe(res) {
    return new Recipe(res.name,res.category,res.id,res.picture,res.score);
  }
}