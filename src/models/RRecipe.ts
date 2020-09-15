export default class RRecipe extends ConnectionToDatabase
{
  db:any;

  public findAll() {
    const recipes = `SELECT * FROM recipe`;
    this.db.query(recipes)
      .then((res) => {
        console.log(res);
        this.db.end();
      })
      .catch((err) => {
        console.log(err);
        this.db.end();
      });
  };
}