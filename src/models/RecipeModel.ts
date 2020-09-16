import ConnectionToDatabas from "./ConnectionToDatabase";
import { Recipe } from "../types/Recipe";

export default class RecipeModel extends ConnectionToDatabas
{
  async findAll() {
    const query = `SELECT * FROM recipe`;
    try {
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

  private responseToRecipe(res) {
    return new Recipe(res.name,res.category,res.id,res.picture,res.score);
  }
}