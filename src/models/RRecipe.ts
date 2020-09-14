const findAll = () => {
    const recipes = `SELECT * FROM recipe`;
    pool.query(recipes)
      .then((res) => {
        console.log(res);
        pool.end();
      })
      .catch((err) => {
        console.log(err);
        pool.end();
      });
  };