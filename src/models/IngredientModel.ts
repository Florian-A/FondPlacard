import ConnectionToDatabas from "./DatabaseConnection";
import { Ingredient } from "../types/Ingredient";

export class IngredientModel extends ConnectionToDatabas
{
  async getAll() {
    try {
      const query = `SELECT * FROM ingredient`;
      let res = await this.dbConnection.query(query);

      let ingredients = [];
      res.rows.forEach(res => ingredients.push(this.responseToIngredient(res)));
      
      return ingredients;
    }
    catch (err: any) {
      console.log(err);
    }
  };

  async get(id) {
    try {
      const query = `SELECT * FROM ingredient WHERE id = $1`;
      const res = await this.dbConnection.query(query, [id]);

      let ingredient;
      res.rows.forEach(res => ingredient = this.responseToIngredient(res));
      
      return ingredient;
    }
    catch (err: any) {
      console.log(err);
    }
  };

  async create(name) {
    try {
      const query = `INSERT INTO ingredient (name) VALUES ($1) RETURNING id,name`;
      const res = await this.dbConnection.query(query, [name]);

      let ingredient;
      res.rows.forEach(res => ingredient = this.responseToIngredient(res));

      return ingredient;
    }
    catch (err: any) {
      console.log(err);
    }
  };

  async edit(id,name) {
    try {
      const query = `UPDATE ingredient SET name = $2 WHERE id = $1 RETURNING id,name`;
      const res = await this.dbConnection.query(query, [id,name]);

      let ingredient;
      res.rows.forEach(res => ingredient = this.responseToIngredient(res));

      return ingredient;
    }
    catch (err: any) {
      console.log(err);
    }
  };

  async del(id) {
    try {
      const query = `DELETE FROM ingredient WHERE id = $1`;
      await this.dbConnection.query(query, [id]);
    }
    catch (err: any) {
      console.log(err);
    }
  };

  private responseToIngredient(res) {
    return new Ingredient(res.name,res.id);
  }
}