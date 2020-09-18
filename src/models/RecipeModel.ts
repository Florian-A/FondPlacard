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

  async new(name,category,picture) {
    try {
      const query = `
        WITH recipe_res AS
            (
                INSERT INTO recipe (name, category, picture)
                    VALUES ('name', 'category', 'picture')
                    RETURNING id,name,category,picture
            ),
        jt_ingredient_recipe_res AS
            (
                SELECT persistmultipleids(array [1,2,3], array [4,5,6], 'jt_ingredient_recipe')
            )
        SELECT id,name,category,picture FROM recipe_res;
                    `;
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