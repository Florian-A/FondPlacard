import ConnectionToDatabas from "./ConnectionToDatabase";

export default class RecipeModel extends ConnectionToDatabas
{
  async findAll() {
    const query = `SELECT * FROM recipe`;
    try {
      let res = await this.db.query(query);
      await this.db.end();
      return res.rows;
    }
    catch (err: any) {
      this.db.end();
      return console.log(err);
    }
  };
}