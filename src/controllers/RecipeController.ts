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

  public show(httpReq: Request, httpRes: Response) {

    const recipeModel = new RecipeModel;
    const id = httpReq.params.id;
    recipeModel.findById(id).then(modelRes => {

      httpRes.setHeader('Content-Type', 'application/json');
      httpRes.send(modelRes);

    })
  }

  public new(httpReq: Request, httpRes: Response) {

    const recipeModel = new RecipeModel;

    recipeModel.new(httpReq.body.name,httpReq.body.category,httpReq.body.picture).then(modelRes => {

      httpRes.setHeader('Content-Type', 'application/json');
      httpRes.send(modelRes);

    })
  }
}