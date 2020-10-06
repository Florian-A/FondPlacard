import ConnectionToDatabas from "./DatabaseConnection";
import { Ingredient } from "../types/Ingredient";

export default class IngredientModel extends ConnectionToDatabas
{
  async getAll() {
    try {
      const query = `SELECT * FROM ingredient`;
      let res = await this.dbConnection.query(query);
      await this.dbConnection.end();

      let ingredients = [];
      res.rows.forEach(res => ingredients.push(this.responseToIngredient(res)));
      
      return ingredients;
    }
    catch (err: any) {
      this.dbConnection.end();
      return console.log(err);
    }
  };

  async get(id) {
    try {
      const query = `SELECT * FROM ingredient WHERE id = $1`;
      const res = await this.dbConnection.query(query, [id]);
      await this.dbConnection.end();

      let ingredient;
      res.rows.forEach(res => ingredient = this.responseToIngredient(res));
      
      return ingredient;
    }
    catch (err: any) {
      this.dbConnection.end();
      return console.log(err);
    }
  };

  async new(name) {
    try {
      const query = `INSERT INTO ingredient (name) VALUES ($1) RETURNING id,name`;
      const res = await this.dbConnection.query(query, [name]);
      await this.dbConnection.end();

      let ingredient;
      res.rows.forEach(res => ingredient = this.responseToIngredient(res));

      return ingredient;
    }
    catch (err: any) {
      this.dbConnection.end();
      return console.log(err);
    }
  };

  async edit(id,name) {
    try {
      const query = `UPDATE ingredient SET name = $2 WHERE id = $1 RETURNING id,name`;
      const res = await this.dbConnection.query(query, [id,name]);
      await this.dbConnection.end();

      let ingredient;
      res.rows.forEach(res => ingredient = this.responseToIngredient(res));

      return ingredient;
    }
    catch (err: any) {
      this.dbConnection.end();
      return console.log(err);
    }
  };

  async del(id) {
    try {
      const query = `DELETE FROM ingredient WHERE id = $1`;
      await this.dbConnection.query(query, [id]);
      await this.dbConnection.end();
    }
    catch (err: any) {
      this.dbConnection.end();
      return console.log(err);
    }
  };

  private responseToIngredient(res) {
    return new Ingredient(res.name,res.id);
  }
}