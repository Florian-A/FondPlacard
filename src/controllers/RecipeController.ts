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
    recipeModel.findById(httpReq.params.id).then(modelRes => {

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

  public edit(httpReq: Request, httpRes: Response) {

    const recipeModel = new RecipeModel;
    recipeModel.edit(httpReq.params.id,httpReq.body.name,httpReq.body.category,httpReq.body.picture).then(modelRes => {

      httpRes.setHeader('Content-Type', 'application/json');
      httpRes.send(modelRes);

    })
  }
}