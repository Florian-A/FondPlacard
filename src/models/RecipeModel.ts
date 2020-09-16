import ConnectionToDatabas from "./ConnectionToDatabase";
import { Recipe } from "../types/Recipe";

export default class RecipeModel extends ConnectionToDatabas
{
  async findAll() {
    const query = `SELECT * FROM recipe`;
    try {
      let res = await this.db.query(query);
      await this.db.end();

      let recipes = [];
      recipes.push(res.rows.map(res => this.responseToRecipe(res)));
      
      return recipes;

    }
    catch (err: any) {
      this.db.end();
      return console.log(err);
    }
  };

  private responseToRecipe(res) {
    new Recipe(res.name,res.category,res.id,res.picture,res.score);
  }
}