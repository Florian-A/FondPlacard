import { Request, Response } from "express";
import  RRecipe from "models/RRecipe";


export class TestController {
  
  public helloWorld(req: Request, res: Response) {

    const recipe = new RRecipe;

    res.json({
      message: recipe.findAll(),
    });
  }
}