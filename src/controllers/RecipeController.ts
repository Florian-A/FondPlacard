import { Request, Response } from "express";
import  RecipeModel from "../models/RecipeModel";


export class RecipeController {
  
  public showAll(req: Request, httpRes: Response) {

    const recipeModel = new RecipeModel;
    recipeModel.findAll().then(modelRes => {

      console.log(modelRes);
      //httpRes.setHeader('Content-Type', 'application/json');
      //httpRes.send(JSON.stringify(modelRes));

    })
  }
}