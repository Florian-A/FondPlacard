import { Request, Response } from "express";
import  RecipeModel from "../models/RecipeModel";


export class RecipeController {
  
  public showAll(httpReq: Request, httpRes: Response) {

    const recipeModel = new RecipeModel;
    recipeModel.findAll().then(modelRes => {

      httpRes.setHeader('Content-Type', 'application/json');
      httpRes.send(modelRes);

    })
  }
}